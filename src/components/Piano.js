import React from 'react';

import Keys from './Keys';
import Logger from './Logger';
import TextInputAndPlay from './TextInputAndPlay';

class Piano extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: [],
            keys: [
                {
                    note: "C",
                    isHighlighted: false
                },
                {
                    note: "D",
                    isHighlighted: false
                },
                {
                    note: "E",
                    isHighlighted: false
                },
                {
                    note: "F",
                    isHighlighted: false
                },
                {
                    note: "G",
                    isHighlighted: false
                },
                {
                    note: "A",
                    isHighlighted: false
                },
                {
                    note: "B",
                    isHighlighted: false
                },
            ],
            playOrder: "",
            isPlaying: false
        }
    }

    handleKeyClick = (e) => {
        let note = e.target.innerHTML;
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
        setTimeout(() => {
            if(matchFound) {
                this.toggleHighlighted(firstNote);
                this.setState({
                    history: [...this.state.history, firstNote.toUpperCase()],
                });
            } else {}
            this.setState({playOrder: notes.toString()});
            if(notes.length > 0){ 
                this.playNotes();
            } else this.setState({isPlaying: false}); 
        }, 1000);
    };

    toggleHighlighted = note => {
        let matchFound = false;
        this.setState({keys: this.state.keys.map(key => {
            if(key.note.toLocaleLowerCase() === note.toLocaleLowerCase()) {
                key.isHighlighted = !key.isHighlighted;
                matchFound = true;
            }
            return key;
        })});

        return matchFound;
    }

    render(){ 
        return (
            <div>
                <Keys keys={this.state.keys} onClick={this.handleKeyClick} />
                <Logger history={this.state.history} />
                <TextInputAndPlay playOrder={this.state.playOrder} isPlaying={this.state.isPlaying} onChange={this.handlePlayOrderChange} onClick={this.handlePlayClick}/>
            </div>
        );
    }
}

export default Piano;
