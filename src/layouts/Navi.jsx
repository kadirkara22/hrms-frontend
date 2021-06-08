  
import React from "react";
import { Button, Icon, Menu, Label } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="user circle outline" size="big" />
            İnsan Kaynakları Yönetim Sistemi
          </Menu.Item>
          <Menu.Item name="find">
            <Icon name="search" size="large" />
            İş ara...
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button.Group>
                <Button as="div" labelPosition="right">
                  <Button color="blue">
                    <Icon name="user circle" />
                    Üye
                  </Button>
                  <Label as="a" basic color="blue" pointing="left">
                    Girişi
                  </Label>
                </Button>
                <Button as="div" labelPosition="right">
                  <Button color="green">
                    <Icon name="user secret" />
                    İşveren
                  </Button>
                  <Label as="a" basic color="green" pointing="left">
                    Girişi
                  </Label>
                </Button>
                <Button as="div" labelPosition="right">
                  <Button color="red">
                    <Icon name="user plus" />
                    Üye
                  </Button>
                  <Label as="a" basic color="red" pointing="left">
                    Ol
                  </Label>
                </Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}