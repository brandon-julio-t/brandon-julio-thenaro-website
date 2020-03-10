import React, { memo } from "react"
import { StaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"

import Link from "../components/link"
import Layout from "../components/layout"
import { mapStateToProps, THEME } from "../state/createStore"

export default connect(mapStateToProps)(
  memo(({ theme }) => (
    <Layout>
      <article>
        <section>
          <p className="lead">
            I write code for back-end and front-end, integrate databases, CI/CD,
            and deploy it to the cloud.
          </p>
        </section>

        <section>
          <header>
            <h2>About Me</h2>
          </header>

          <p>Hello, World!</p>
          <p>
            I am an average dude, interested in web and mobile development,
            striving to be software engineer.
          </p>
          <p>
            I am introverted, keeps everything to myself, hates public speaking
            and presentation, code and learn new tech stack on spare time.
          </p>
          <p>
            Loves memes and movies such as Joker, John Wick, IP Man, Sonic the
            Hedgehog, etc., prefers to watch in IMAX.
          </p>
          <p>
            Used to play games, mostly offline, currently on hiatus because of
            my weak hardware.
          </p>
          <p>
            Spent most of my childhood with computer to play games. Had many
            issues with the computer such as bad sector, corrupted windows,
            outdated drivers, system incompatibility, viruses, etc. because it
            was a low-end machine. Because of those issues, I'm now unwavering
            in face of errors. Although sometimes errors are frustrating but I
            will come back to solve it.
          </p>
          <p>
            Currently living in Jakarta, Indonesia to study Information System
            at <Link to="https://binus.ac.id">Binus University</Link>.
          </p>
          <p>Most loved programming languages: Python, Java.</p>
          <p>Most loved frameworks: Ruby on Rails, Gatsby, Flutter.</p>
          <p>
            <Link to="/resume">My Resume (PDF)</Link>
          </p>
        </section>

        <section>
          <header>
            <h2>Developer Skills</h2>
          </header>

          <div className="row">
            <section className="col">
              <header>
                <h3>Programming Languages</h3>
              </header>

              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Ruby</li>
                <li>SQL</li>
              </ul>
            </section>

            <section className="col">
              <header>
                <h3>Frameworks</h3>
              </header>

              <ul>
                <li>Flask</li>
                <li>Laravel</li>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>Spring Boot</li>
              </ul>
            </section>
          </div>

          <p>
            <Link isInternal={true} to="/skills">
              Read more
            </Link>
          </p>
        </section>

        <section>
          <header>
            <h2>GitHub Projects</h2>
          </header>

          <p>The following table shows my 5 latest repositories on GitHub.</p>

          <table
            className={`table table-responsive ${
              theme === THEME.DARK ? "table-dark" : ""
            }`}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            {/* GraphQL query matches localhost:8000/___graphql */}
            <StaticQuery
              query={graphql`
                query GitHubAPI {
                  githubData {
                    data {
                      viewer {
                        repositories {
                          nodes {
                            url
                            name
                            description
                          }
                        }
                      }
                    }
                  }
                }
              `}
              render={({
                githubData: {
                  data: {
                    viewer: {
                      repositories: { nodes },
                    },
                  },
                },
              }) => (
                <tbody>
                  {nodes.map(({ name, url, description }, index) => (
                    <tr key={name}>
                      <td>{index + 1}</td>
                      <td>
                        <Link to={url}>{name.replace(/[-]/gi, " ")}</Link>
                      </td>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            />
          </table>
        </section>
      </article>
    </Layout>
  ))
)