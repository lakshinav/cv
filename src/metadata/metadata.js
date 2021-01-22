module.exports = {
  name: 'Valeriya Lakshina, PhD HSE',
  title: 'Associate Professor',
  baseUrl: 'https://lakshinav.github.io/cv/',
  facts: {
    Residence: '<a href="https://goo.gl/maps/E3t2hfHBFCitGqzw7">
                <i class="fa fa-home fact-icon">  
                Nizhny Novgorod</i>
                </a>',
    Homepage: '<a href="https://www.hse.ru/en/staff/lakshinav">
                  <span class="print">https://www.hse.ru/en/staff/lakshinav</span>
                  <span class="screen">www.hse.ru</span>
                </a>',
    GitHub: '<a href="https://github.com/lakshinav"><i class="fab fa-github fact-icon"></i>lakshinav</a>',
    Email: '<a href="mailto:lakshinav@gmail.com">lakshinav@gmail.com</a>'
//     'LinkedIn': 
//     'StackOverflow':
//     'Kaggle':
//     'Hackerrank':
    
  },
  skills: [
    ['Econometrics', '+++++'], ['Statistics', '++++'], ['R', '+++++'], ['LaTeX', '+++++'], ['knitr', '++++'], ['SQL', '+++'],
    ['Python', '+++'], ['pandas', '+++'], ['sk-learn', '+++'],  ['TPOT', '+++'], ['sktime', '+++'], ['dash/plotly', '+++']
    ['CI/CD', '++'], ['ML pipeline', '++']
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
  positions: [
    {
      title: 'HSE University',
      position: 'Associate Professor', 
      written: '2020 - pres.',
      badges: ['teaching', 'research'],
      contents: 'Econometrics course and research seminars for bachelor and master students.'
    },
    {
      title: 'HSE University',
      position: 'Senior Lecturer', 
      written: '2014 - 2020',
      badges: ['teaching', 'research'],
      contents: 'Econometrics, Macroeconomics I, Game Theory courses and research seminars for bachelor and master students.'
    },
    {
      title: 'Laboratory of Quantitave Methods in Economics',
      position: 'Research Assistant',
      written: '2013-2014',
      badges: ['research'],
      contents: 'Financial volatility modelling.'
    }
  ],
  
    positions: [ // professional training
    {
      title: '<a href="https://cs.hse.ru/dpo/announcements/414116513.html">ML pipelines in production</a>',
      position: 'HSE University and Sber', 
      written: '11.2020-12.2020',
      badges: ['kedro', 'fastAPI', 'hypothesis', 'CI/CD', 'Docker', '', '', '', ''],
      contents: `
      This online-course is supported by Russian Federal Project "Human Resources for the Digital Economy".
      It's devoted to digital transformation of Russian economy and the role of CDO's.
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
      The crash-course is devoted to in-depth training in data analysis, machine learning algorithms and introduction to neural networks, including CV, NLP and recommerder systems.
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
