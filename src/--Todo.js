import React, {Component} from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
            status: this.props.status,
            id: this.props.id
            
        };
    }
  
    clicked(e) {
        this.setState({ status: !this.state.status });
    }

    /* delete(e) {
        this.setState({ status: !this.state.content });
    }
    
    
    edit(e) {
        this.setState({ status: !this.state });
    } */

    render() {
        var buttonComplete = "button is-primary";
        var buttonText = "✓";
        var contentClass = "subtitle is-5";
            
        var buttonDelete = "button is-danger";
        var buttonTextDelete = "X";

        var buttonEdit = "button is-warning";
        var buttonTextEdit = "~";

        if (this.state.status) {
            buttonComplete = "button is-black";
            buttonText = "🞮";
            contentClass += " strike";
        }

      
  
      return (
        <div className="box">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <p className={contentClass}>
                  {this.state.content}
                </p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <div className="field has-addons">
                  <p className="control">
                    <button
                      className={buttonEdit}
                      onClick={this.edit.bind(this)}
                    >
                      {buttonTextEdit}
                    </button>

                    <button
                      className={buttonDelete}
                      onClick={this.delete.bind(this)}
                    >
                      {buttonTextDelete}
                    </button>

                    <button
                      className={buttonComplete}
                      onClick={this.clicked.bind(this)}
                    >
                      {buttonText}
                    </button>
                                                            
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }

  export default Todo;