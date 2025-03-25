import React from "react";
import { LeftMenu } from "../LeftMenu/LeftMenu";
import { Notifications } from "../Notifications/Notifications";
import ellipse1521 from "./ellipse-1521.svg";
import expandMore24Px12 from "./expand-more-24px-1-2.svg";
import expandMore24Px1 from "./expand-more-24px-1.svg";
import image from "./image.svg";
import plus24Px from "./plus-24px.svg";
import search24Px from "./search-24px.svg";
import "./style.css";

export const MacbookAir = () => {
  return (
    <div className="macbook-air">
      <div className="container">
        <LeftMenu
          className="left-menu-instance"
          profile="manager"
          property1="dashboard"
        />

        <header className="header">
          <Notifications className="notifications-instance" />
          <div className="search">
            <img className="icon-action-search" alt="Search" src={search24Px} />
          </div>
          <div className="user-profile">
            <div className="avatar" />
            <span className="user-name">Thomas Bernard</span>
            <img
              className="expand-icon"
              alt="Expand more"
              src={expandMore24Px1}
            />
          </div>
        </header>

        <main className="dashboard">
          <section className="overview">
            <div className="card">
              <header className="card-header">
                <h3>Time saved</h3>
                <div className="dropdown">
                  <span>This year</span>
                  <img
                    className="expand-icon"
                    alt="Expand more"
                    src={expandMore24Px12}
                  />
                </div>
              </header>
              <div className="card-body">
                <h2>12,345</h2>
                <p>work hours have been saved through automation.</p>
              </div>
            </div>

            <div className="card">
              <header className="card-header">
                <h3>Time tracked</h3>
                <div className="dropdown">
                  <span>This week</span>
                  <img
                    className="expand-icon"
                    alt="Expand more"
                    src={expandMore24Px12}
                  />
                </div>
              </header>
              <div className="card-body">
                <h2>10</h2>
                <p>hours spent in the system</p>
              </div>
            </div>

            <div className="card">
              <header className="card-header">
                <h3>Words Translated</h3>
              </header>
              <div className="card-body">
                <h2>57,438,468</h2>
                <p>words have been translated using the system.</p>
              </div>
            </div>
          </section>

          <section className="task-overview">
            <header className="section-header">
              <h2>Task Overview</h2>
            </header>
            <div className="task-stats">
              <h2>40</h2>
              <p>tasks in progress</p>
              <h2>1768</h2>
              <p>archived tasks</p>
            </div>
            <div className="last-projects">
              <header className="card-header">
                <h3>Last projects</h3>
                <a href="#">See all tasks</a>
              </header>
              <ul>
                <li>2211912 - BJ - M - DERMA ATOPY DRY</li>
                <li>2304911 - B1 - EKA - SOL NEWSLETTE...</li>
                <li>2307911 - B1 - EKA - TRIAL WEEK</li>
              </ul>
            </div>
            <button className="create-task">
              <img src={plus24Px} alt="Plus" />
              Create task
            </button>
          </section>

          <section className="documents-overview">
            <header className="section-header">
              <h2>Documents Overview</h2>
            </header>
            <div className="document-stats">
              <h2>73%</h2>
              <p>of the model is trained</p>
            </div>
            <div className="last-documents">
              <header className="card-header">
                <h3>Last documents</h3>
                <a href="#">See all documents</a>
              </header>
              <ul>
                <li>B1-EC-CAT-POS-DRY_FCN-HAIR & SKI...</li>
                <li>B1-EC-CAT-POS-DRY_FCN-HAIR & SKI...</li>
                <li>B1-EC-CAT-POS-DRY_FCN-HAIR & SKI...</li>
              </ul>
            </div>
          </section>

          <section className="performance">
            <header className="section-header">
              <h2>Performance</h2>
            </header>
            <div className="performance-metrics">
              <div className="metric">
                <img src={ellipse1521} alt="Performance chart" />
                <h2>3h30m</h2>
                <p>Average translation time</p>
              </div>
              <div className="metric">
                <img src={image} alt="Performance chart" />
                <h2>6h15m</h2>
                <p>Average validation time</p>
              </div>
            </div>
            <div className="fastest-members">
              <h3>The fastest members</h3>
              <ul>
                <li>1. Thomas Bernard</li>
                <li>2. Thomas Bernard</li>
                <li>3. Thomas Bernard</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default MacbookAir;
