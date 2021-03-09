module.exports = {
  name: 'Valeriya Lakshina, PhD HSE',
  title: 'Associate Professor',
  baseUrl: 'https://lakshinav.github.io/cv/',
  facts: {
    Residence: `<a href="https://goo.gl/maps/E3t2hfHBFCitGqzw7">
                <i class="fa fa-home fact-icon"></i>Nizhny Novgorod</a>`,
    Homepage: `<a href="https://www.hse.ru/en/staff/lakshinav">
                <i class="fab fa-znak fact-icon"></i>
                  <span class="print">https://www.hse.ru/en/staff/lakshinav</span>
                  <span class="screen">hse.ru</span>
                </a>`,
    GitHub: '<a href="https://github.com/lakshinav"><i class="fab fa-github fact-icon"></i>lakshinav</a>',
    Email: '<a href="mailto:lakshinav@gmail.com">lakshinav@gmail.com</a>'
//     'LinkedIn': 
//     'StackOverflow':
//     'Kaggle':
//     'Hackerrank':
    
  },
  skills: [
    ['Econometrics', '+++++'], ['Statistics', '++++'], ['R', '+++++'], ['LaTeX', '+++++'], ['knitr', '++++'], ['SQL', '+++'],
    ['Python', '+++'], ['pandas', '+++'], ['sk-learn', '+++'],  ['TPOT', '+++'], ['sktime', '+++'], ['dash/plotly', '+++'],
    ['CI/CD', '++'], ['Kedro', '++']
    
    // tpot + sktime = AutoML
    // web-scraping
    
    // Tech stack:
    // web-scraping: BeatifulSoap, API
    // data storage: SQL, 
    // data preprocessing: GE, pandas
    // ML: sk-learn, Keras
    // AutoML: TPOT, sktime
    // ML pipeline: kedro
    // testing: hypothesis
    // CI/CD: GH Actions, Docker
  ],
//   positions: [
//     {
//       title: 'HSE University',
//       position: 'Associate Professor', 
//       written: '2020 - pres.',
//       badges: ['teaching', 'research'],
//       contents: 'Econometrics course and research seminars for bachelor and master students.'
//     },
//     {
//       title: 'HSE University',
//       position: 'Senior Lecturer', 
//       written: '2014 - 2020',
//       badges: ['teaching', 'research'],
//       contents: 'Econometrics, Macroeconomics I, Game Theory courses and research seminars for bachelor and master students.'
//     },
//     {
//       title: 'Laboratory of Quantitave Methods in Economics',
//       position: 'Research Assistant',
//       written: '2013-2014',
//       badges: ['research'],
//       contents: 'Financial volatility modelling.'
//     } <a href="https://cs.hse.ru/dpo/announcements/414116513.html"></a>
//   ],
  
    positions: [ // professional training
    {
      title: 'ML pipelines in production',
      position: 'HSE University and Sber', 
      written: '11.2020-12.2020',
      badges: ['kedro', 'fastAPI', 'hypothesis', 'CI/CD', 'Docker', 'streamlit'],
      contents: `
During this course I've build a ML pipeline on the basis of my Jupyter notebook.  
The notebook is devoted to the time series prediction, namely the prediction of unemployment in Russia, and prepared for my students at HSE University.
The pipline is built in Kedro environment and includes:

* web-scraping step for collecting data (BeatifulSoap)
* building prediction (pandas, statsmodels)
* testing (hypothesis)
* serving the result by API (fastAPI, uvicorn)
* scheduling the pipeline tasks, e.g. web-scraping (airflow)
* CI/CD (Docker, Github Actions)
* evaluating metrics and presentring them on a dashboard (streamlit)
`
    },
    {
      title: 'Introduction to data-driven management',
      position: 'University of National Technology Initiative 2035', 
      written: '09.2020-10.2020',
      badges: ['CDO', 'digital transformation'],
      contents: `
      This online-course is supported by Russian Federal Project "Human Resources for the Digital Economy".
      It's devoted to digital transformation of Russian economy and the role of CDO's.
      `
    },
    {
      title: 'Summer digital school: Data Science track',
      position: 'Sberbank Corporate University', 
      written: '07.2020-08.2020',
      badges: ['python', 'pandas', 'keras', 'ML', 'sk-learn'],
      contents: `
      Data Science track includes one-week crash-course and 7 additional courses.
      The crash-course is devoted to in-depth training in data analysis, machine learning algorithms and introduction to neural networks, including such applications as CV, NLP and recommerder systems.
      The courses cover the following topics:
      * Basics of Programming
      * Basics of Solving Algorithmic Problems
      * Basics of SQL
      * Python for Data Analysis
      * Machine Learning
      `
    },
  ],
  
};
