import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Header, Image, Segment } from "semantic-ui-react";
import { useStore } from "../../App/stores/store";
import LoginForm from "../users/LoginForm";

export default function HomePage() {
  const { userStore, modalStore } = useStore();
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          BloggerSpot
        </Header>
        {userStore.isLoggedIn ? (
          <>
            <Header as="h2" inverted content="Welcome to BloggerSpot !!" />
            <Button as={Link} to="/activities" size="huge" inverted>
              Take me to my Blogs
            </Button>
          </>
        ) : (
          <>
            <Button as={Link} to="/login" size="huge" inverted>
              Login to see Activities
            </Button>
            <Button
              onClick={() => modalStore.openModal(<LoginForm />)}
              size="huge"
              inverted
            >
              Register
            </Button>
          </>
        )}
      </Container>
    </Segment>
  );
}
