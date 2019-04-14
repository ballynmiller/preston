import React from 'react';

import Keys from './Keys';
import Logger from './Logger';
import TextInputAndPlay from './TextInputAndPlay';
import './Piano.scss';

class Piano extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: [],
            keys: [
                {
                    color: "white",
                    note: "C",
                    isHighlighted: false
                },
                {
                    color: "black",
                    note: null,
                    isHighlighted: false
                },
                {
                    color: "white",
                    note: "D",
                    isHighlighted: false
                },
                {
                    color: "black",
                    note: null,
                    isHighlighted: false
                },
                {
                    color: "white",
                    note: "E",
                    isHighlighted: false
                },
                {
                    color: "white",
                    note: "F",
                    isHighlighted: false
                },
                {
                    color: "black",
                    note: null,
                    isHighlighted: false
                },
                {
                    color: "white",
                    note: "G",
                    isHighlighted: false
                },
                {
                    color: "black",
                    note: null,
                    isHighlighted: false
                },
                {
                    "color": "white",
                    note: "A",
                    isHighlighted: false
                },
                                {
                    color: "black",
                    note: null,
                    isHighlighted: false
                },
                {
                    color: "white",
                    note: "B",
                    isHighlighted: false
                },
            ],
            playOrder: "",
            isPlaying: false
        }
    }

    handleKeyClick = (e) => {
        if(!e.target.children.length) return;
        let note = e.target.children[0].innerHTML;
        this.setState({history: [...this.state.history, note]});
        this.toggleHighlighted(note);
        setTimeout(() => {
            this.toggleHighlighted(note);
        }, 1000);
    }

    handlePlayClick = (e) => {
        this.setState({isPlaying: true});
        this.playNotes();
    }

    handlePlayOrderChange = (e) =>{
        this.setState({playOrder: e.target.value});
    }

    playNotes = () =>{
        let notes = this.state.playOrder.split(',');
        let firstNote = notes.shift();
        let matchFound = this.toggleHighlighted(firstNote);
        if(matchFound){
            this.setState({
                history: [...this.state.history, firstNote.toUpperCase()],
                playOrder: notes.toString()
            });
        }
        setTimeout(() => {
            this.toggleHighlighted(firstNote);
            if(notes.length > 0){ 
                this.playNotes();
            } else this.setState({isPlaying: false}); 
        }, 1000);
    };

    toggleHighlighted = note => {
        let matchFound = false;
        this.setState({keys: this.state.keys.map(key => {
            if(key.note !== null && key.note.toLowerCase() === note.toLowerCase()) {
                key.isHighlighted = !key.isHighlighted;
                matchFound = true;
            }
            return key;
        })});

        return matchFound;
    }

    render(){ 
        return (
            <div className="pianoContainer">
                <div className="piano">
                    <Keys keys={this.state.keys} onClick={this.handleKeyClick} />
                </div>
                <Logger history={this.state.history} />
                <TextInputAndPlay playOrder={this.state.playOrder} isPlaying={this.state.isPlaying} onChange={this.handlePlayOrderChange} onClick={this.handlePlayClick}/>
            </div>
        );
    }
}

export default Piano;
