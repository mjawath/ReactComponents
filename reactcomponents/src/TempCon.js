import React, {Component} from 'react';
import Container from './component/Templatable'
import {Items} from './component/MockData'

import List from './component/List'

class TempCon extends Component {
    render() {

        return<div>
            <div className="App-intro">
            This is a demo page for testing the components
            <Container data={"my test data"}>
                {
                    (data) => {
                        <span>{data}</span>
                    }

                }
            </Container>
        </div>

            <div><span>Testing list component</span></div>
            <div className="App-intro">
                This is a List component

                <List collection={Items}>
                    {
                        (index,itemdata) =>
                            <div>
                                <span>{index}</span>
                                <span>{itemdata.desc}</span>
                                <span>{itemdata.name}</span>
                            </div>
                    }
                </List>
            </div>
        </div>
    }
}