import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { makeAutoObservable, runInAction } from "mobx";
import { ChatComment } from "../Models/comment";
import { store } from "./store";

export default class CommonStore {
  comments: ChatComment[] = [];
  hubConnection: HubConnection | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  createHubConnection = (activityId: string) => {
    if (store.activityStore.selectedActivity) {
      this.hubConnection = new HubConnectionBuilder()
        .withUrl("http://localhost:5000/chat?activityId=" + activityId, {
          accessTokenFactory: () => store.userStore.user?.token!,
        })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
    }

    this.hubConnection?.start().catch((err) => {
      console.log(err);
    });

    this.hubConnection?.on("LoadComments", (comment: ChatComment[]) => {
      runInAction(() => {
        comment.forEach((comment) => {
          comment.createdAt = new Date(comment.createdAt + "Z");
        });
        this.comments = comment;
      });
    });

    this.hubConnection?.on("ReceiveComment", (comment: ChatComment) => {
      runInAction(() => {
        comment.createdAt = new Date(comment.createdAt + "Z");
        this.comments.push(comment);
      });
    });
  };

  stopHubConnection = () => {
    this.hubConnection?.stop().catch((err) => {
      console.log("err stopping connection");
    });
  };

  clearComments = () => {
    this.comments = [];
    this.stopHubConnection();
  };

  addComment = async (values: any) => {
    values.activityId = store.activityStore.selectedActivity?.id;
    try {
      await this.hubConnection?.invoke("SendComment", values);
    } catch (error) {
      console.log(error);
    }
  };
}
