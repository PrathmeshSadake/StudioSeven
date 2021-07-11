import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

import sections from "./directory-data";

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: sections,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
          />
        ))}
      </div>
    );
  }
}
