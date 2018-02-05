import React, {Component} from 'react'
import Link from 'gatsby-link'

import VisibilitySensor from 'react-visibility-sensor';

const Section = (props) => (<div style={{
    height: props.height || '100vh',
    padding: 10,
    background: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '10px solid #ccc'
  }}>
  <div>
    {props.children}
  </div>
</div>)

const Sensor = (props) => (
  <div style={{
    background: 'rgba(0,0,0,.5)',
    padding: 5,
    top: 0,
    left: 0,
    right: 0,
    height: '100vh'
  }}>
    <VisibilitySensor onChange={props.onChange} scrollCheck={true} scrollThrottle={-0.5}/>
  </div>
)

// const Page = (props) => (
//   <Section>
//     <Sensor onChange={props.onChange}/>
//   </Section>
// )

const slides = [
  {
    id: 1,
    text: 'hello 1'
  }, {
    id: 2,
    text: 'hello 2'
  }, {
    id: 3,
    text: 'hello 3'
  }, {
    id: 4,
    text: 'hello 4'
  }
]

class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }

  onChange(isVisible, sides) {
    // console.log('Element ' + JSON.stringify(sides) + ' is now %s', isVisible ? 'visible' : 'hidden');
    // !sides.top ? this.setState({ page: {this.state.page+1} })
    if (!sides.top) {
      this.setState({
        page: this.state.page + 1
      })
    }
    if (!sides.bottom) {
      this.setState({
        page: this.state.page - 1
      })
    }
    console.log('hi');
  }

  render() {
    return (
      <div style={{
        position: 'relative'
      }}>
        <Section height='300vh'>
          <h1>Hello</h1>
        </Section>

        <div style={{
              position: 'fixed',
              top: 0,
              zIndex: 100
        }}>
          <h1>
            Page: {this.state.page}
          </h1>
        </div>

        {
          slides.map(item => (
            <Sensor onChange={::this.onChange} id={item.id} key={item.id}/>
          ))
        }

        <Section>
          <h1>bb</h1>
        </Section>
        <Section>
          <h1>bb</h1>
        </Section>
      </div>
    )
  }

}

export default IndexPage;
