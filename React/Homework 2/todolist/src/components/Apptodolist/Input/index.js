import React, { useState, useEffect } from "react";

function Input() {
  const [yapilacak, setYapilacak] = useState([]);

  const [yapilacaklar, setYapilacaklar] = useState("");

  const onChangeInput = (e) => {
    // Input içerisine yazılan değeri alma
    setYapilacaklar(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (yapilacaklar !== "") {
      setYapilacak([
        {
          id: `${yapilacaklar} - ${Date.now()}`,
          tamamlandi: false,
          yapilacaklar,
        },
        ...yapilacak,
      ]);
    }
    setYapilacaklar("");
  };

  const acKapat = (id) => {
    setYapilacak(
      yapilacak.map((yapilacaklar) =>
        yapilacaklar.id === id
          ? { ...yapilacaklar, tamamlandi: !yapilacaklar.tamamlandi }
          : yapilacaklar
      )
    );
    console.log(yapilacaklar.tamamlandi);
  };

  const elemanSil = (id) => {
    const yeniListe = yapilacak.filter((sil) => sil.id !== id);
    setYapilacak([...yeniListe]);
  };

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmit}>
            <input
              name="massage"
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              onChange={onChangeInput}
              value={yapilacaklar}
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul id="list" className="todo-list">
            {yapilacak.map((t, i) => (
              <li
                className={yapilacaklar.tamamlandi ? "completed" : ""}
                key={i}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    onClick={() => acKapat(t.id)}
                  />
                  <label>{t.yapilacaklar}</label>
                  <button
                    className="destroy"
                    onClick={() => elemanSil(t.id)}
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{yapilacaklar.filter}</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default Input;
