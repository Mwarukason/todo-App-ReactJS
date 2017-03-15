var destination = document.querySelector("#app");

    var TodoItems = React.createClass({
      render: function() {
        var todoEntry = this.props.entries;

        function createTasks(item) {
          return <li key={item.key}>{item.text}</li>
        }

        var listElement = todoEntry.map(createTasks);

        return (
          <ul className="elemList">
            {listElement}
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
              <div className="todo_class">
                <div className="todo_subclass">
                  <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a}
                           placeholder="Enter Your Task">
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
