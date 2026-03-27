import React, { Component } from 'react';
import './AppOld.css';
import { Posts } from './Posts';
import { Form } from './Form';

export class AppOld extends Component {
    state = {
            count: 0,
            isRunning: false,
            posts:[
                { id: 'abc1', name: 'JS Basic' },
                { id: 'abc2', name: 'JavaScript Advanced' },
                { id: 'abc3', name: 'React JS' }
            ]
        }

    intervalId = null;

    handleStart = () => {
        if (this.state.isRunning) return;

        this.intervalId = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)

        this.setState({ isRunning: true });
    }
    handleStop = () => {
        clearInterval(this.intervalId);
        this.setState({ isRunning: false });
    }
    handleReset = () => {
        this.setState({ count: 0 });
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    componentDidMount() {
        const userCount = localStorage.getItem('timer')
        if (userCount) {
            this.setState({ count: +userCount})
        }
    }
    componentDidUpdate() {
        localStorage.setItem('timer', this.state.count)
    }
    deletePost = (id) => {
        this.setState({posts: this.state.posts.filter(post => post.id !== id)})
    }
    render() {
        return (
            <div className="App">
                Hello from react
                <hr></hr>
                { !this.state.isRunning ? (
                    <button className="btn-new" onClick={this.handleStart}>start</button>
                ) : (
                    <button className="btn-new" onClick={this.handleStop}>stop</button>
                )}
                <button className="btn-new" onClick={this.handleReset}>reset</button>
                <br></br>
                <span className="count">{this.state.count}</span>
                <br></br>
                <div>
                    <Posts posts={this.state.posts} deletePost={this.deletePost} />
                </div>
                <br></br>
                <div>
                    <Form />
                </div>
            </div>
        )
    }
}