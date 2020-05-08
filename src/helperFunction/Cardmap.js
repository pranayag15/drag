import React, { Component } from "react";
import { Card, Row, Col, Button } from "antd";

const { Meta } = Card;

export const mapCard = (data) => {
//   console.log(data, "dattaattat")
  let title = data["title"] ? data["title"] : "";
  let description = data["description"] ? data["description"] : "";
  let textalignment = data["textalignment"] ? data["textalignment"] : "left";
  let imageheight = data["imageheight"] ? data["imageheight"] : "180px";
  let buttoncolor = data["buttoncolor"] ? data["buttoncolor"] : "#1890FF";
  let buttontextcolor = data["buttontextcolor"]
    ? data["buttontextcolor"]
    : "#ffffff";
  let image = data["image"] ? (
    <img style={{ height: `${imageheight}px` }} src={data["image"]} />
  ) : (
    ""
  );
  let button = data["buttontext"] ? (
    <center>
      <br />
      <Button
        style={{
          width: "100%",
          color: `${buttontextcolor}`,
          backgroundColor: `${buttoncolor}`,
        }}
        shape="round"
        type="primary"
      >
        {data["buttontext"]}
      </Button>
    </center>
  ) : (
    ""
  );
  return (
    <Card hoverable style={{ width: "100%" }} cover={image}>
      <Meta
        style={{ textAlign: `${textalignment}` }}
        title={title}
        description={description}
      />
      {button}
    </Card>
  );
};
