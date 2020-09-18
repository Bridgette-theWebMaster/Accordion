import React, { Component } from "react";

export default class Accordion extends Component {
  static defaultProps = { section: [] };
  state = { currentSectionIndex: null };
  handleSetCurrentSection = (sectionIndex) => {
    this.setState({ currentSectionIndex: sectionIndex });
  };
  renderItem(section, idx, currentSectionIndex) {
    return (
      <li className="Accordion-item" key={idx}>
        <button type="button" onClick={() => this.handleSetCurrentSection(idx)}>
          {section.title}
        </button>
        {currentSectionIndex === idx && <p>{section.content}</p>}
      </li>
    );
  }
  render() {
    const { currentSectionIndex } = this.state;
    const { section } = this.props;
    return (
      <ul className="Accordion">
        {section.map((section, idx) =>
          this.renderItem(section, idx, currentSectionIndex)
        )}
      </ul>
    );
  }
}
