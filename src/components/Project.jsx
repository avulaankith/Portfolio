import { useRef, useEffect } from 'react';
import '../App.css'

function Project() {
  const revealsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 }
    );

    revealsRef.current.forEach((reveal) => {
      observer.observe(reveal);
    });

    return () => {
      revealsRef.current.forEach((reveal) => {
        observer.unobserve(reveal);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
  };

  return (
    <div className="portfolio">
        <h1 ref={addToRefs} className="reveal">Projects</h1>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image">
            <img src="images/twitter-image.jpeg" alt="Twitter Logo" />
          </div>
          <div className="portfolio-content">
            <h3>TWITTER SENTIMENT ANALYSIS</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>Led the development and implementation of various deep learning models (including BERT, CNN,
                LSTM, BiLSTM)
                for sentiment
                analysis on Twitter data. Explored combinations of these models such as BERT-CNN, BERT-LSTM,
                and
                BERT-BiLSTM
                to predict
                sentiments (positive, negative, neutral, and irrelevant) associated with Twitter entities.
              </li>
              <li>Conducted extensive experimentation and analysis using Jupyter Notebooks to fine-tune models
                and
                enhance
                sentiment
                classification performance. Explored the integration of BERT embeddings with different
                architectures and
                tested multiple
                model combinations (CNN, LSTM, BiLSTM) to optimize sentiment analysis results.</li>
              <li>Collaborated with a team to drive the project&apos;s success, contributing to its development and
                analysis.</li>
            </ul>
            <p />
            <p><a href="https://github.com/avulaankith/Twitter-Sentiment-Analysis" target="_blank" rel="noreferrer">View on
                GitHub</a></p>
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image2">
            <img src="images/opfaas.jpg" alt="openfaas" />
          </div>
          <div className="portfolio-content">
            <h3>TRAFFIC AWARE SCALING OPTIMIZATION IN OPENFAAS</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>Proposed and Implemented a traffic aware scaling algorithm for the OpenFaaS platform for
                changing the static
                parameters during scaling.</li>
              <li>Improved run times and request handling by 30% for Data Science Functions written in the
                Function-as-a-service
                model
                in the OpenFaaS framework.</li>
              <li>Reduced the response time in the proposed design by 50% compared to time taken in Default
                Static
                Scaling
                implementation.</li>
            </ul>
            <p />
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image2">
            <img src="images/multi-label-classification.png" alt="multi-label-classification" />
          </div>
          <div className="portfolio-content">
            <h3>MULTI-LABEL CLASSIFICATION FOR LAND COVER DETECTION</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>Executed a Transfer learning approach to identify the land cover features from a given
                multi-spectral image consisting
                of 12 bands from Sentinel-2 Satellite.</li>
              <li>Analyzed the raster bands reactivity to different land forms based on resolutions</li>
              <li>Obtained a recall of 63.80 for all the bands and a recall of 63.00 when used the RGB bands
                for
                prediction.</li>
            </ul>
            <p />
            <p><a href="https://github.com/avulaankith/BigEarthNet" target="_blank" rel="noreferrer">View on
                GitHub</a></p>
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image">
            <img src="images/multi-threaded-file-sync.webp" alt="multi-threaded-file-sync" />
          </div>
          <div className="portfolio-content">
            <h3>MULTI-THREADED FILE SYNC SYSTEM</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>Created a Python-based system enabling seamless file operations (upload, download, rename,
                delete) between
                client and
                server using RPC based communication Protocols.</li>
              <li>Designed and integrated a helper thread automating file creation, modification, and deletion
                processes
                between the
                client and server. Employed asynchronous communication for optimized handling of file tasks,
                enhancing
                system
                efficiency.</li>
              <li>Developed synchronous and asynchronous communication functionalities between the client and
                server.</li>
            </ul>
            <p />
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image3">
            <img src="images/matrix_mul.png" alt="neighborhoods" />
          </div>
          <div className="portfolio-content">
            <h3>Sparse Matrix Multiplication Implementations in Big Data Environments</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>Implemented matrix multiplication algorithms across multiple big data platforms, including
                Hadoop, Spark Scala, Pig, and
                Hive.</li>
              <li>Developed two versions of the matrix multiplication algorithm in hadoop: a version using one
                mapper and reducer for another version with two mappers and reducers.</li>
              {/* <li>Developed two versions of the matrix multiplication algorithm in hadoop: a streamlined version using one mapper and reducer for
                            efficient processing in smaller datasets, and an enhanced version with two mappers and reducers, optimizing performance
                            for larger data volumes through increased parallelism.</li> */}
            </ul>
            <p />
            {/* <p><a href="https://github.com/avulaankith/Neighbourhood-Analysis" target="_blank">View on GitHub</a> */}
            <p />
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image">
            <img src="images/2pc.png" alt="Two Phase Commit" />
          </div>
          <div className="portfolio-content">
            <h3>Fault-Tolerant Implementation of Two-Phase Commit Protocol in Distributed Systems</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>The project demonstrates the implementation of the Two-Phase Commit Protocol in a
                Python-based
                distributed system,
                focusing on testing its fault tolerance through various simulated failure scenarios.</li>
              <li>Utilizing Python threads, the project achieves concurrent execution of server processes and
                maintains consistent
                inter-server communication via XMLRPC, demonstrating effective management of distributed
                nodes.
              </li>
              <li>The project provided practical insights into the complexities of distributed systems,
                highlighting the importance of
                thread management and fault tolerance, while overcoming challenges related to concurrent
                server
                operations and runtime
                issues.</li>
            </ul>
            <p />
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image3">
            <img src="images/nymap.png" alt="neighborhoods" />
          </div>
          <div className="portfolio-content">
            <h3>NEIGHBOURHOOD ANALYSIS USING PYTHON</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>Analyzed the neighborhoods of New York City and identified areas with high potential for
                Indian
                Cuisine Restaurants.</li>
              <li>Identified localities preferable to live where Indian Cuisine Restaurants are available
                using a
                rating scale of 10.</li>
            </ul>
            <p />
            <p><a href="https://github.com/avulaankith/Neighbourhood-Analysis" target="_blank" rel="noreferrer">View on
                GitHub</a>
            </p>
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image2">
            <img src="images/eye.jpeg" alt="eye" />
          </div>
          <div className="portfolio-content">
            <h3>OCULAR DISEASE DETECTION WEB APPLICATION</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>Developed a web application using Flask for user dashboard functionality and cataract
                prediction
                specifically focusing on cataract-positive cases for prediction.</li>
              <li>Implemented a Transfer Learning approach to train the customized VGG-16 model using Pytorch
                with
                an accuracy of 97%.</li>
            </ul>
            <p />
            <p><a href="https://github.com/avulaankith/Ocular-Disease-Detection-Web-Application" target="_blank" rel="noreferrer">View on GitHub</a></p>
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image">
            <img src="images/blogging-website.png" alt="neighborhoods" />
          </div>
          <div className="portfolio-content">
            <h3>BLOGGING WEBSITE</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>Spearheaded the development of a Blogging Website using HTML, CSS, JavaScript, PHP, and
                MySQL.
                Implemented user authentication, message posting, and reply functionalities.</li>
              <li>Orchestrated the deployment of the website on a local server using XAMPP, facilitating
                Apache
                and MySQL server
                management.</li>
              <li>Collaborated with a team to create a blogging platform with robust features, incorporating
                user
                authentication, message
                posting, and reply functionalities.</li>
            </ul>
            <p />
            <p><a href="https://github.com/avulaankith/Blogging-Website" target="_blank" rel="noreferrer">View on GitHub</a></p>
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image3">
            <img src="images/IPL-Toss-Prediction.png" alt="Premier Leage Prediction" />
          </div>
          <div className="portfolio-content">
            <h3>PREMIER LEAGUE RESULT PREDICTION</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>Predicted match results by taking the history of respective teams, the venue of the match,
                and
                the season of the IPL series with an accuracy of 99%.</li>
            </ul>
            <p />
            <p><a href="https://github.com/avulaankith/IPL-Toss-Prediction" target="_blank" rel="noreferrer">View on GitHub</a>
            </p>
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          <div className="portfolio-image3">
            <img src="images/heart.jpeg" alt="Heart" />
          </div>
          <div className="portfolio-content">
            <h3>HEART FAILURE RATE PREDICTION</h3>
            <p>
            </p><ul className="portfolio-li">
              <li>Developed a heart failure rate prediction model using PyTorch, leveraging the ”Heart Failure
                Clinical Records Dataset” from Kaggle, encompassing diverse clinical features indicative of
                heart health.</li>
            </ul>
            <p />
            <p><a href="https://github.com/avulaankith/Heart-Failure-Rate" target="_blank" rel="noreferrer">View on GitHub</a>
            </p>
          </div>
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          {/* <div class="portfolio-image">
                        <img src="images/multi-threaded-file-sync.webp" alt="neighborhoods">
                    </div> */}
          <h3>PyDTL: Decision Tree Learning &amp; Random Forests Implementation in Python</h3>
          <p>
          </p><ul className="portfolio-li">
            <li>Developed a Python script (dtree.py) that enables Decision Tree Learning with Information Gain
              and entropy-based
              attribute selection. It offers flexibility with optimized or randomized attribute selection for
              constructing decision
              trees, facilitating diverse decision-making approaches.</li>
            <li>Implemented ensemble learning by creating Random Forests of 3 or 15 trees, utilizing randomized
              attribute selection
              within individual trees. Improved predictive accuracy by aggregating predictions from multiple
              trees, enabling more
              robust and accurate modeling.</li>
            <li>The program produces comprehensive output (output.txt) capturing predictions, true classes, and
              classification accuracy
              for test data. It enables thorough evaluation and analysis, providing insights into the
              effectiveness of various tree
              construction modes and forest sizes for predictive tasks.</li>
          </ul>
          <p />
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          {/* <div class="portfolio-image">
                        <img src="images/multi-threaded-file-sync.webp" alt="neighborhoods">
                    </div> */}
          <h3>Extended Nim Game Solver: Red and Blue Ball Edition with Minimax Algorithm using Alpha Beta Pruning
          </h3>
          <p>
          </p><ul className="portfolio-li">
            <li>Developed a Nim game variant involving red and blue balls represented as bags. Implemented
              functions to manipulate the
              game state, remove balls from bags, and assess terminal states.</li>
            <li>Implemented two versions of the minimax algorithm (standard and misere) for decision-making in
              the game. Utilized
              alpha-beta pruning to optimize the search space, enhancing computational efficiency.</li>
            <li>Created a command-line interface allowing users to set initial game parameters (number of red
              and blue balls, game
              version, player type) and, optionally, the depth for alpha-beta pruning. Provided flexibility
              for users to interact with
              the game, allowing both human and computer players with varied game settings.</li>
          </ul>
          <p />
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          {/* <div class="portfolio-image3">
                        <img src="images/IPL-Toss-Prediction.png" alt="neighborhoods">
                    </div> */}
          <h3>Solving Eight Puzzle Problem using State Space Search</h3>
          <p>
          </p><ul className="portfolio-li">
            <li>The project is about implementing various search algorithms to find the optimal solution from
              the start state to the
              goal state. Algorithms like Breadth First Search (bfs), Depth First Search (dfs), Uniform Cost
              Search (ucs), Depth
              Limited Search (dls), Iteratively Deepening Search (ids), AStar Search (astar), and Greedy
              Search (greedy) are coded to
              navigate through the puzzle states.</li>
          </ul>
          <p />
        </div>
        <div ref={addToRefs} className="portfolio-item reveal">
          {/* <div class="portfolio-image3">
                        <img src="images/eye.jpeg" alt="eye">
                    </div> */}
          <h3>Toy Search Engine</h3>
          <p>
          </p><ul className="portfolio-li">
            <li>Implemented a toy search engine on a corpus of US inaugural addresses of presidents by
              generating TF-IDF vectors for the
              speeches.</li>
            <li>The program returns the speech with the highest cosine similarity score for a given query.</li>
          </ul>
          <p />
        </div>
      </div>
  );
}

export default Project;
