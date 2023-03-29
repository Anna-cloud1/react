import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';

const baseUrl = `https://6422fd57001cb9fc20354c18.mockapi.io/api/v1/tasks`;

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    fetch(baseUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(tasksList => {
        const tasks = tasksList.map(({ id, ...task }) => ({
          id,
          ...task,
        }));
        this.setState({
          tasks: tasks,
        });
      });
  };

  onCreate = text => {
    // для создания на сервере
    // 1 create task object +
    // 2. post object to server +
    // 3.  fetch list from server +

    const newTask = {
      text,
      done: false,
    };

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;utc-8',
      },
      body: JSON.stringify(newTask),
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to create task');
      }
    });

    //   const updatedTasks = tasks.concat(newTask);
    //   this.setState({
    //     tasks: updatedTasks,
    //   });
  };

  handleTaskStatusChange = id => {
    //1 find task in state by id
    // create upd task
    // upd task on server
    // fetch upd task list

    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;utc-8',
      },
      body: JSON.stringify(updatedTask),
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to create task');
      }
    });
  };

  handleTaskDelete = id => {
    // 1 filter tasks
    // 2. update state

    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error('Failed to delete task');
      }
    });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
