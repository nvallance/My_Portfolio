import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../Title"

export default class TourList extends Component {
  state = {
    tour: [],
    sortedTours: [],
  };

  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="my" subtitle="projects" />
        <div className={styles.center}>
          {this.state.sortedTours.map(({ node }) => {
            return <Tour key={node.contentful_id} tour={node} />
          })}
        </div>
      </section>
    )
  }
}
