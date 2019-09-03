/**
 * Created by thapelo-m50 on 2019/09/03.
 */
  class ReactTodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
    }

    render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
         "h3",
         null,
         "TODO"
        ),
        React.createElement(TodoList, { items: this.state.items }),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement(
            "label",
            { htmlFor: "new-todo" },
            "What needs to be done?"
          ),
          React.createElement("input", {
            id: "new-todo",
            onChange: this.handleChange,
            value: this.state.text
          }),
          React.createElement(
            "button",
            null,
            "Add #",
            this.state.items.length + 1
          ),
          React.createElement(
            "button",
            { id: "clear-todo", onClick:this.handleClear },
            "Clear"
          )
        )
      );
    }

    handleChange(e) {
      this.setState({ text: e.target.value })
    }

    handleClear(e) {
      e.preventDefault();

      if (this.state.items.length == 0) {return;}

      this.setState(state => ({
        items: []
      }));
    }

        handleSubmit(e) {
          e.preventDefault();
          if (!this.state.text.length) { return; }

          const newItem = {
            text: this.state.text,
            id: Date.now()
          };
          this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
          }));
        }
      }

      class TodoList extends React.Component {
        render() {
          return React.createElement(
            "ul",
            null,
            this.props.items.map(item => React.createElement(
              "li",
              { key: item.id },
              item.text
            ))
          );
        }
      }
      ReactDOM.render(React.createElement(ReactTodoApp, null), document.getElementById('root'));