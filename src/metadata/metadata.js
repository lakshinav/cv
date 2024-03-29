module.exports = {
  name: 'Valeriya Lakshina',
  title: 'PhD, Senior Engineer,  Associate Professor',
  baseUrl: 'https://lakshinav.github.io/cv/',
  facts: {
    Residence: `<a href="https://goo.gl/maps/E3t2hfHBFCitGqzw7">
                <i class="fa fa-home fact-icon"></i>Nizhny Novgorod</a>`,
    LinkedIn: '<a href="https://www.linkedin.com/in/lakshinav"><i class="fab fa-linkedin fact-icon"></i>lakshinav</a>',
    Homepage: `<a href="https://www.hse.ru/en/staff/lakshinav">
                  <i class="fa fa-university"></i>hse.ru</a>`,
    GitHub: '<a href="https://github.com/lakshinav"><i class="fab fa-github fact-icon"></i>lakshinav</a>',
    Email: '<a href="mailto:lakshinav@gmail.com"><i class="fa fa-envelope fact-icon"></i>lakshinav@gmail.com</a>'
  },
  skills: [
    ['Python', 90],
    ['Neural network compression', 90],
    ['Computer vision', 80],
    ['PyTorch', 80],
    ['R', 80],
    ['LaTeX', 90],  
    ['Statistics', 75],   
    ['Time series econometrics', 95],
    ['CI/CD', 60], 
    ['Kedro', 60]
   ],
  
  positions: [
  {
      company: 'Huawei Research Institute',
      location: 'Nizhny Novgorod, RU',
      title: 'Senior Engineer',
      period: 'Dec 2021 - Present',
      skills: ['PyTorch', 'Model compression & acceleration', 'Computer vision'],
      contents: `
Completed a project on neural network compresion and acceleration, mainly for CV architectures. 
Currently working on the next project in the same field and lead a team of 8 engineers and interns.
The stack includes PyTorch, ONNX. 
`
    },  
    {
      company: 'HSE University',
      location: 'Nizhny Novgorod, RU',
      title: 'Associate Professor',
      period: 'Sept 2012 - Present',
      skills: ['Econometrics', 'Statistics', 'Microeconomics'],
      contents: `
Got PhD in Moscow at HSE University with honors. 
The thesis is devoted to time series modelling, namely, spatial specifications of multivariate volatility models.
The research results are published in Scopus/WoS indexed journals.
The соde for the key publications is available on [GitHub](https://github.com/lakshinav/papers).
`
    },  
  ],
  
  
  prof_dev: [ // professional training
    {
      title: 'ML pipelines in production',
      position: 'HSE University and Sber', 
      written: '11.2020-12.2020',
      badges: ['kedro', 'fastAPI', 'hypothesis', 'CI/CD', 'Docker'],
      contents: `
During this [course](https://cs.hse.ru/dpo/announcements/414116513.html) I've build a ML pipeline on the basis of my Jupyter notebook.  
The notebook is devoted to the time series prediction, namely the prediction of unemployment in Russia, and was used in the student project at HSE University.
The pipeline is built in Kedro environment and includes:

* web-scraping step for collecting data (BeatifulSoap)
* building prediction (pandas, statsmodels)
* testing (hypothesis)
* serving the result by API (fastAPI, uvicorn)
* scheduling the pipeline tasks, e.g. web-scraping (airflow)
* CI/CD (Docker, Github Actions)
* evaluating metrics
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
      badges: ['python', 'ML', 'pandas', 'keras', 'sk-learn'],
      contents: `
Data Science track includes one-week crash-course and 7 additional courses.
The crash-course is devoted to in-depth training in data analysis, machine learning algorithms and introduction to neural networks, 
including such applications as CV, NLP and recommerder systems.

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
