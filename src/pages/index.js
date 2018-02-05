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
    top: 0,
    left: 0,
    right: 0,
    height: '105vh',
  }}>
    Page {props.id}
    <VisibilitySensor onChange={props.onChange} scrollCheck={true} scrollThrottle={-0.5}/>
  </div>
)

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

  onChange(id) {
    this.setState({
      page: id
    })
  }

  sliderVisibleTop(isVisible, sides) {
    if (sides.top && sides.bottom) {
      this.setState({
        sliderVisible: true
      })
    }
    if (sides.bottom == false) {
      this.setState({
        sliderVisible: false
      })
    }
  }

  sliderVisibleBottom(isVisible, sides) {
    if (sides.top && sides.bottom) {
      this.setState({
        sliderVisible: true
      })
    }
    if (sides.top == false) {
      this.setState({
        sliderVisible: false
      })
    }
  }

  render() {
    return (
      <div style={{
        position: 'relative'
      }}>

        <Section height='300vh'>
          <h1>Hello</h1>
        </Section>

        { this.state.sliderVisible &&
          <div style={{
                position: 'fixed',
                top: 0,
                zIndex: 100
          }}>
            <h1>
              Page: {this.state.page}
            </h1>
          </div>
        }


        <div>
          <VisibilitySensor onChange={::this.sliderVisibleTop}/>
          {
            slides.map(item => (
              <Sensor onChange={()=>{ this.onChange(item.id) }} id={item.id} key={item.id}>
              </Sensor>
            ))
          }
          <VisibilitySensor onChange={::this.sliderVisibleBottom}/>
        </div>

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
