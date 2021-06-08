import React from "react";
import { Icon, Menu } from "semantic-ui-react";

export default function LeftPanel() {
  return (
    <div>
      <Menu icon="labeled" inverted vertical size="large">
        <Menu.Item name="hrmspersonel">
          <Icon name="user md" />
          İK Personelleri
        </Menu.Item>
        <Menu.Item name="employer">
          <Icon name="user secret" />
          İşverenler
        </Menu.Item>
        <Menu.Item name="candidate">
          <Icon name="user circle" />
          Adaylar
        </Menu.Item>
        <Menu.Item name="JobTitle">
          <Icon name="list" />
          İş Pozisyonları Listesi
        </Menu.Item>
        <Menu.Item name="jobadvert">
          <Icon name="list" />
          İş İlanı Listesi
        </Menu.Item>
      </Menu>
    </div>
  );
}