var destination = document.querySelector("#app");

    var TodoItems = React.createClass({
      render: function() {
        var todoEntries = this.props.entries;

        function createTasks(item) {
          return <li key={item.key}>{item.text}</li>
        }

        var listItems = todoEntries.map(createTasks);

        return (
          <ul className="theList">
            {listItems}
          </ul>
        );
      }
    });

    var TodoList = React.createClass({
      getInitialState: function() {
        return {
          items: []
        };
      },
      addItem: function(e) {
        var itemArray = this.state.items;

        itemArray.push(
          {
            text: this._inputElement.value,
            key: Date.now()
          }
        );

        this.setState({
          items: itemArray
        });

        this._inputElement.value = "";

        e.preventDefault();
      },
      render: function() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input align="middle" ref={(a) => this._inputElement = a}
                       placeholder="Enter Your Tasks">
                </input>
                <button type="submit">ADD</button>
              </form>
            </div>
            <TodoItems entries={this.state.items}/>
          </div>
        );
      }
    });

    ReactDOM.render(
      <div>
        <TodoList/>
      </div>,
      destination
    );
