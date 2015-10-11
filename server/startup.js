Meteor.startup( function() {
  var question_list = [
    { question: 'What did you learn yesterday/this week?',
      answer: '',
            category: 'general'

    },
    { question: 'What excites or interests you about coding?',
      answer: '',
      category: 'general'

    }
    ,
    { question: 'What is a recent technical challenge you experienced and how did you solve it?',
      answer: '',
            category: 'general'

    }
    ,
    { question: 'What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?',
      answer: '',
            category: 'general'

    }
    ,
    { question: 'Talk about your preferred development environment.',
      answer: '',
            category: 'general'

    }
    ,
    { question: 'Which version control systems are you familiar with?',
      answer: '',
            category: 'general'

    }
    ,
    { question: 'Can you describe your workflow when you create a web page?',
      answer: '',
            category: 'general'

    }
    ,
    { question: 'If you have 5 different stylesheets, how would you best integrate them into the site?',
      answer: '',
            category: 'default'

    }
    ,
    { question: 'Can you describe the difference between progressive enhancement and graceful degradation?',
      answer: '',
            category: 'default'

    }
    ,
    { question: 'How would you optimize a websites assets/resources?',
      answer: '',
            category: 'default'

    }
    ,
    { question: 'How many resources will a browser download from a given domain at a time? What are the exceptions?',
      answer: '',
            category: 'default'

    }

  ];

  var questions = Questions.find({}).fetch();
  var len = questions.length;
  if(len === 0) {
    var list_length = question_list.length;
    for(i=0; i < list_length; i++) {
      question = question_list[i];
      Questions.insert(question);
    }
  }
});
