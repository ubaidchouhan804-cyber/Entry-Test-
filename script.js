// Data Repository
const DATA = {
  subjects: [
    {
      id: 'math',
      name: 'Mathematics',
      icon: 'calculator',
      topics: [
        { id: 'matrices', name: 'Matrices & Determinants', questions: [] },
        { id: 'real-numbers', name: 'Real & Complex Numbers', questions: [] },
        { id: 'logarithms', name: 'Logarithms', questions: [] },
        { id: 'algebraic-formulas', name: 'Algebraic Formulas', questions: [] },
        { id: 'factorization', name: 'Factorization', questions: [] },
        { id: 'algebraic-manipulation', name: 'Algebraic Manipulation (HCF/LCM)', questions: [] },
        { id: 'linear-equations', name: 'Linear Equations & Inequalities', questions: [] },
        { id: 'ratio-proportion', name: 'Ratio and Proportion', questions: [] },
        { id: 'synthetic-division', name: 'Synthetic Division (Ex 2.6)', questions: [] },
        { id: 'pythagoras', name: 'Pythagoras\' Theorem', questions: [] },
        { id: 'general-geometry', name: 'General Geometry', questions: [] }
      ]
    },
    {
      id: 'physics',
      name: 'Physics',
      icon: 'zap',
      topics: [
        { id: 'quantities', name: 'Physical Quantities & SI Units', questions: [] },
        { id: 'kinematics', name: 'Kinematics', questions: [] },
        { id: 'newton-laws', name: 'Newton\'s Laws of Motion', questions: [] },
        { id: 'forces', name: 'Forces & Equilibrium', questions: [] },
        { id: 'work-energy', name: 'Work, Energy and Power', questions: [] },
        { id: 'waves-sound', name: 'Waves & Sound', questions: [] },
        { id: 'optics', name: 'Light & Geometrical Optics', questions: [] },
        { id: 'electricity', name: 'Current Electricity', questions: [] },
        { id: 'magnetism', name: 'Electromagnetism', questions: [] },
        { id: 'radioactivity', name: 'Atomic & Nuclear Physics', questions: [] }
      ]
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      icon: 'beaker',
      topics: [
        { 
          id: 'organic', 
          name: 'Organic Chemistry', 
          questions: [
            { id: 'c1', text: 'What is the chemical formula for Methane?', options: ['CH4', 'CO2', 'H2O', 'NaCl'], correct: 0 }
          ] 
        }
      ]
    },
    {
      id: 'english',
      name: 'English',
      icon: 'book-open',
      topics: [
        { 
          id: 'vocab', 
          name: 'Vocabulary', 
          questions: [
            { id: 'e1', text: 'Synonym of "Swift"', options: ['Slow', 'Fast', 'Lazy', 'Heavy'], correct: 1 }
          ] 
        }
      ]
    },
    {
      id: 'iq',
      name: 'Intelligence/IQ',
      icon: 'brain',
      topics: [
        { 
          id: 'patterns', 
          name: 'Pattern Recognition', 
          questions: [
            { id: 'i1', text: '2, 4, 8, 16, ?', options: ['20', '24', '32', '64'], correct: 2 }
          ] 
        }
      ]
    },
    {
      id: 'urdu',
      name: 'Urdu',
      icon: 'pen-tool',
      topics: [
        { 
          id: 'grammar', 
          name: 'Urdu Grammar', 
          questions: [
            { id: 'u1', text: 'Urdu is the language of which country?', options: ['India', 'Pakistan', 'Iran', 'Turkey'], correct: 1 }
          ] 
        }
      ]
    }
  ],
  history: JSON.parse(localStorage.getItem('entrytest_history') || '[]')
};

// State Manager
const STATE = {
  activeView: 'dashboard',
  selectedSubject: null,
  selectedTopic: null,
  quiz: null
};

// Math Unlimited Question Generators
const MathGenerator = {
  generate: function(topicId) {
    switch(topicId) {
      case 'matrices': return this.matrices();
      case 'real-numbers': return this.realNumbers();
      case 'logarithms': return this.logarithms();
      case 'algebraic-formulas': return this.algebraicFormulas();
      case 'factorization': return this.factorization();
      case 'algebraic-manipulation': return this.algebraicManipulation();
      case 'linear-equations': return this.linearEquations();
      case 'synthetic-division': return this.syntheticDivision();
      case 'ratio-proportion': return this.ratioProportion();
      case 'pythagoras': return this.pythagoras();
      case 'general-geometry': return this.generalGeometry();
      default: return this.matrices();
    }
  },

  matrices: function() {
    const types = ['order', 'singular', 'transpose'];
    const type = types[Math.floor(Math.random() * types.length)];
    if (type === 'order') {
      const r = Math.floor(Math.random() * 3) + 1;
      const c = Math.floor(Math.random() * 3) + 1;
      return {
        text: `What is the order of a matrix having ${r} rows and ${c} columns?`,
        options: [`${r}-by-${c}`, `${c}-by-${r}`, `${r}-by-1`, `1-by-${c}`],
        correct: 0,
        explanation: `The order of a matrix is defined by its dimensions. Since it has ${r} rows and ${c} columns, its order is ${r}-by-${c} (Rows always come first).`
      };
    } else if (type === 'singular') {
      return {
        text: 'A square matrix M is singular if its determinant is:',
        options: ['One', 'Zero', 'Negative', 'Infinity'],
        correct: 1,
        explanation: 'Step 1: Recall the definition of a singular matrix. Step 2: A matrix is singular if its determinant |M| equals zero, meaning it cannot be inverted.'
      };
    } else {
       return {
        text: 'If A is a 3-by-2 matrix, what is the order of its transpose A<sup>t</sup>?',
        options: ['3-by-2', '2-by-3', '3-by-3', '2-by-2'],
        correct: 1,
        explanation: 'Step 1: Transpose operation swaps rows and columns. Step 2: For a 3x2 matrix, the 3 rows become 3 columns and 2 columns become 2 rows. Step 3: The result is a 2x3 matrix.'
      };
    }
  },

  realNumbers: function() {
    const val = Math.floor(Math.random() * 10) + 2;
    return {
      text: `Which of the following is the conjugate of the complex number (${val} + 3i)?`,
      options: [`${val} - 3i`, `-${val} + 3i`, `-3i - ${val}`, `3i + ${val}`],
      correct: 0,
      explanation: `Step 1: Identify the real part (${val}) and imaginary part (3i). Step 2: The conjugate is formed by changing the sign of the imaginary part. Step 3: Hence, the conjugate is ${val} - 3i.`
    };
  },

  logarithms: function() {
    const b = Math.floor(Math.random() * 5) + 2;
    const exp = Math.floor(Math.random() * 3) + 2;
    const res = Math.pow(b, exp);
    return {
      text: `Convert the exponential form ${b}<sup>${exp}</sup> = ${res} into logarithmic form:`,
      options: [`log<sub>${b}</sub>${res} = ${exp}`, `log<sub>${res}</sub>${b} = ${exp}`, `log<sub>${exp}</sub>${res} = ${b}`, `log<sub>${b}</sub>${exp} = ${res}`],
      correct: 0,
      explanation: `Step 1: Identify base (${b}), exponent (${exp}), and value (${res}). Step 2: The general rule is a<sup>x</sup> = y is log<sub>a</sub>y = x. Step 3: Applying this gives log<sub>${b}</sub>${res} = ${exp}.`
    };
  },

  algebraicFormulas: function() {
    const a = Math.floor(Math.random() * 5) + 1;
    return {
      text: `Solve for the expansion of (x + ${a})<sup>2</sup>:`,
      options: [`x<sup>2</sup> + ${2*a}x + ${a*a}`, `x<sup>2</sup> + ${a*a}`, `x<sup>2</sup> + ${2*a}x + ${2*a}`, `x<sup>2</sup> + ${a}x + ${a*a}`],
      correct: 0,
      explanation: `Step 1: Use the standard formula (a+b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>. Step 2: Here a=x and b=${a}. Step 3: Calculation: x<sup>2</sup> + 2(x)(${a}) + ${a}<sup>2</sup> = x<sup>2</sup> + ${2*a}x + ${a*a}.`
    };
  },

  factorization: function() {
    return {
      text: 'According to the Factor Theorem, (x - a) is a factor of p(x) if p(a) is:',
      options: ['Zero', 'One', 'p(x)', 'Positive'],
      correct: 0,
      explanation: 'Step 1: Understand the Factor Theorem. Step 2: It states that if a value x=a makes the polynomial p(a)=0, then (x-a) must be a factor.'
    };
  },

  algebraicManipulation: function() {
    return {
      text: 'Highest Common Factor (H.C.F) of two or more expressions is:',
      options: ['The common factor of highest power', 'The product of all factors', 'The lowest common multiple', 'Sum of all factors'],
      correct: 0,
      explanation: 'Step 1: Define factors. Step 2: H.C.F is the largest (highest power) common factor present in the set of expressions.'
    };
  },

  linearEquations: function() {
    const a = Math.floor(Math.random() * 5) + 2;
    const b = Math.floor(Math.random() * 10) + 1;
    const res = a * 2 + b;
    return {
      text: `Solve for x in the linear equation: ${a}x + ${b} = ${res}`,
      options: ['2', '3', '4', '5'],
      correct: 0,
      explanation: `Step 1: Subtract ${b} from both sides: ${a}x = ${res} - ${b} = ${res-b}. Step 2: Divide by the coefficient ${a}: x = ${res-b} / ${a} = 2.`
    };
  },

  syntheticDivision: function() {
    // Problem Types: 1. Find Remaining Roots, 2. Find unknown 'h', 3. Basic Division
    const type = Math.floor(Math.random() * 3);
    
    if (type === 0) {
      // Find unknown h
      const root = Math.floor(Math.random() * 3) + 1;
      const h_val = Math.floor(Math.random() * 4) + 1;
      // Equation: x^2 - 3hx + 9 = 0 -> If root=3, 9 - 9h + 9 = 0 -> 18 = 9h -> h=2
      // Using a simpler one: 3 is a zero of P(x) = 2x^2 + hx - 18
      // 2(9) + 3h - 18 = 0 -> 18 + 3h - 18 = 0 -> 3h=0 -> h=0
      // Let's use: P(x) = x^3 - 2hx^2 + 11. If 1 is a zero.
      return {
        text: `If 2 is the zero of polynomial P(x) = x<sup>3</sup> - 4hx<sup>2</sup> + 8, find the value of 'h' using synthetic division:`,
        options: ['1', '2', '0', '-1'],
        correct: 0,
        explanation: `Step 1: By Synthetic Division, if 2 is a zero, P(2) must be 0. Step 2: Substitute x=2: (2)<sup>3</sup> - 4h(2)<sup>2</sup> + 8 = 0. Step 3: 8 - 16h + 8 = 0 -> 16 - 16h = 0. Step 4: 16h = 16, so h = 1.`
      };
    } else if (type === 1) {
      // Basic Division - Find Remainder
      return {
        text: 'Use synthetic division to find the remainder when (x<sup>2</sup> + 7x - 1) is divided by (x + 1):',
        options: ['-7', '5', '7', '0'],
        correct: 0,
        explanation: 'Step 1: Set x + 1 = 0 to get the root x = -1. Step 2: Use coefficients [1, 7, -1]. Step 3: Multiply and add: 1 is dropped, (-1)(1) + 7 = 6, (-1)(6) - 1 = -7. Step 4: The last number is the remainder: -7.'
      };
    } else {
      // Solve cubic root
      return {
        text: 'If -1 is a root of the equation x<sup>3</sup> - 7x - 6 = 0, find the other roots using synthetic division:',
        options: ['3 and -2', '2 and -3', '1 and 6', 'None'],
        correct: 0,
        explanation: 'Step 1: Using root -1, the reduced equation (depressed equation) becomes x<sup>2</sup> - x - 6 = 0. Step 2: Factorize result: (x - 3)(x + 2) = 0. Step 3: The other roots are 3 and -2.'
      };
    }
  },

  ratioProportion: function() {
    return {
      text: 'In the proportion a:b :: c:d, the quantities a and d are called:',
      options: ['Extremes', 'Means', 'Antecedents', 'Consequents'],
      correct: 0,
      explanation: 'In the ratio notation a:b = c:d, the outer values (a, d) are Extremes and inner values (b, c) are Means.'
    };
  },

  pythagoras: function() {
    const sides = [[3, 4, 5], [6, 8, 10], [5, 12, 13]];
    const triple = sides[Math.floor(Math.random() * sides.length)];
    return {
      text: `In a right-angled triangle, if the legs are ${triple[0]} and ${triple[1]}, what is the length of the hypotenuse?`,
      options: [`${triple[2]}`, `${triple[0]+triple[1]}`, `${triple[2]+1}`, 'None'],
      correct: 0,
      explanation: `Step 1: Use Pythagoras Theorem a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>. Step 2: ${triple[0]}<sup>2</sup> + ${triple[1]}<sup>2</sup> = ${triple[0]*triple[0]} + ${triple[1]*triple[1]} = ${triple[2]*triple[2]}. Step 3: Taking square root gives c = ${triple[2]}.`
    };
  },

  generalGeometry: function() {
    return {
      text: 'A triangle with all three sides equal is called an:',
      options: ['Equilateral triangle', 'Isosceles triangle', 'Scalene triangle', 'Right triangle'],
      correct: 0,
      explanation: 'Step 1: Define triangle types. Step 2: Equilateral (all sides equal), Isosceles (two sides equal), Scalene (no sides equal).'
    };
  }
};

// Physics Unlimited Question Generators
const PhysicsGenerator = {
  generate: function(topicId) {
    switch(topicId) {
      case 'quantities': return this.quantities();
      case 'kinematics': return this.kinematics();
      case 'newton-laws': return this.newtonLaws();
      case 'forces': return this.forces();
      case 'work-energy': return this.workEnergy();
      case 'waves-sound': return this.wavesSound();
      case 'optics': return this.optics();
      case 'electricity': return this.electricity();
      case 'magnetism': return this.magnetism();
      case 'radioactivity': return this.radioactivity();
      default: return this.quantities();
    }
  },

  quantities: function() {
    const questions = [
      () => ({
        text: 'Which of the following is NOT a base SI unit?',
        options: ['Kilogram', 'Kelvin', 'Newton', 'Ampere'],
        correct: 2,
        explanation: 'Step 1: Recall SI base units: metre, kilogram, second, ampere, kelvin, candela, mole. Step 2: Newton is a derived unit (F=ma).'
      }),
      () => {
        const val = Math.pow(10, Math.floor(Math.random() * 3) + 1);
        return {
          text: `A prefix representing ${val} units is called:`,
          options: [val === 10 ? 'Deca' : (val === 100 ? 'Hecto' : 'Kilo'), 'Milli', 'Micro', 'Nano'],
          correct: 0,
          explanation: `Step 1: Check SI prefix table. Step 2: 10=deca, 100=hecto, 1000=kilo. Step 3: Match ${val} to its prefix.`
        };
      }
    ];
    return questions[Math.floor(Math.random() * questions.length)]();
  },

  kinematics: function() {
    const v = (Math.floor(Math.random() * 10) + 1) * 10;
    const t = Math.floor(Math.random() * 5) + 2;
    const s = v * t;
    const questions = [
      () => ({
        text: `If a car moves with a constant speed of ${v} m/s, what distance will it cover in ${t} seconds?`,
        options: [`${s} m`, `${v + t} m`, `${v / t} m`, `${s / 2} m`],
        correct: 0,
        explanation: `Step 1: Use formula Distance = Speed  Time. Step 2: Multiply ${v} by ${t}. Step 3: ${v}  ${t} = ${s} metres.`
      }),
      () => ({
        text: 'The slope of a Distance-Time graph represents:',
        options: ['Speed', 'Acceleration', 'Force', 'Momentum'],
        correct: 0,
        explanation: 'Step 1: Gradient = vertical change / horizontal change. Step 2: Here, change in distance / change in time is Speed.'
      })
    ];
    return questions[Math.floor(Math.random() * questions.length)]();
  },

  newtonLaws: function() {
    const m = Math.floor(Math.random() * 5) + 2;
    const a = Math.floor(Math.random() * 4) + 2;
    const f = m * a;
    return {
      text: `Calculate the force required to produce an acceleration of ${a} m/s<sup>2</sup> in a body of mass ${m} kg:`,
      options: [`${f} N`, `${m + a} N`, `${m / a} N`, `${f * 2} N`],
      correct: 0,
      explanation: `Step 1: Use Newton's 2nd Law F = ma. Step 2: Multiply mass (${m} kg) by acceleration (${a} m/s<sup>2</sup>). Step 3: ${m}  ${a} = ${f} Newton.`
    };
  },

  forces: function() {
    const f = (Math.floor(Math.random() * 5) + 5) * 2;
    const l = Math.floor(Math.random() * 20) + 10;
    const l_m = l / 100;
    const torque = parseFloat((f * l_m).toFixed(2));
    return {
      text: `Calculate the torque produced by a force of ${f} N acting on a spanner with a moment arm of ${l} cm:`,
      options: [`${torque} Nm`, `${f * l} Nm`, `${f / l} Nm`, `${f + l} Nm`],
      correct: 0,
      explanation: `Step 1: Convert moment arm to metres -> ${l} cm = ${l_m} m. Step 2: Use formula Torque () = Force  Moment Arm. Step 3: ${f}  ${l_m} = ${torque} Nm.`
    };
  },

  workEnergy: function() {
    const m = Math.floor(Math.random() * 10) + 1;
    const h = Math.floor(Math.random() * 10) + 1;
    const pe = m * 10 * h;
    return {
      text: `Find the Potential Energy of a ${m} kg object raised to a height of ${h} metres (Take g = 10 m/s<sup>2</sup>):`,
      options: [`${pe} J`, `${m * h} J`, `${pe / 10} J`, `${pe * 2} J`],
      correct: 0,
      explanation: `Step 1: Use formula P.E = mgh. Step 2: Multiply mass (${m})  10  height (${h}). Step 3: Result is ${pe} Joules.`
    };
  },

  wavesSound: function() {
    return {
      text: 'Which type of wave are sound waves?',
      options: ['Longitudinal', 'Transverse', 'Electromagnetic', 'Non-mechanical'],
      correct: 0,
      explanation: 'Step 1: Identify particle motion. Step 2: Sound particles vibrate back and forth along the direction of propagation. Step 3: This is a longitudinal wave.'
    };
  },

  optics: function() {
    return {
      text: 'The point where light rays parallel to principal axis meet after reflection from concave mirror is:',
      options: ['Principal Focus', 'Centre of Curvature', 'Pole', 'Aperture'],
      correct: 0,
      explanation: 'Step 1: Define principal focus. Step 2: In concave mirrors, parallel rays converge to a single point called the Focus (F).'
    };
  },

  electricity: function() {
    const q = (Math.floor(Math.random() * 5) + 1) * 10;
    const t = Math.floor(Math.random() * 5) + 5;
    const i = parseFloat((q / t).toFixed(2));
    return {
      text: `Calculate current if ${q} C charge flows through a cross-section in ${t} seconds:`,
      options: [`${i} A`, `${q * t} A`, `${q + t} A`, `${q - t} A`],
      correct: 0,
      explanation: `Step 1: Use formula I = Q / t. Step 2: Divide charge (${q} C) by time (${t} s). Step 3: Current = ${i} Ampere.`
    };
  },

  magnetism: function() {
    return {
      text: 'Which device is used to increase or decrease the value of alternating voltage?',
      options: ['Transformer', 'Motor', 'Generator', 'Capacitor'],
      correct: 0,
      explanation: 'Step 1: Define optical/electrical devices. Step 2: A transformer works on mutual induction to step up or step down AC voltage.'
    };
  },

  radioactivity: function() {
    return {
      text: 'The emissions that have no charge and high penetrating power are:',
      options: ['Gamma Rays', 'Alpha Particles', 'Beta Particles', 'Protons'],
      correct: 0,
      explanation: 'Step 1: Compare emissions. Step 2: Alpha (+2), Beta (-1), and Gamma (Neutral). Step 3: Gamma rays are high-energy photons with maximum penetration.'
    };
  }
};

// UI Components
const UI = {
  views: {
    dashboard: document.getElementById('view-dashboard'),
    repo: document.getElementById('view-repo'),
    quiz: document.getElementById('view-quiz'),
    history: document.getElementById('view-history'),
    results: document.getElementById('view-results')
  },
  sidebar: {
    navDashboard: document.getElementById('nav-dashboard'),
    navHistory: document.getElementById('nav-history')
  },
  containers: {
    subjects: document.getElementById('subjects-grid'),
    topics: document.getElementById('topics-list'),
    question: document.getElementById('quiz-container')
  }
};

// Initialize
function init() {
  renderDashboard();
  setupEventListeners();
  switchView('dashboard');
}

function setupEventListeners() {
  UI.sidebar.navDashboard.addEventListener('click', () => switchView('dashboard'));
  UI.sidebar.navHistory.addEventListener('click', () => switchView('history'));
  
  document.getElementById('start-mock').addEventListener('click', startMockTest);
  
  // Search logic
  const searchInput = document.querySelector('.search-bar input');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.subject-card');
    cards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = name.includes(query) ? 'block' : 'none';
    });
  });
}

function switchView(viewName) {
  Object.keys(UI.views).forEach(key => {
    if (UI.views[key]) {
      UI.views[key].classList.toggle('active', key === viewName);
      UI.views[key].classList.add('animate-fade');
    }
  });
  
  STATE.activeView = viewName;
  updateNavState();
}

function updateNavState() {
  UI.sidebar.navDashboard.classList.toggle('active', STATE.activeView === 'dashboard');
  UI.sidebar.navHistory.classList.toggle('active', STATE.activeView === 'history');
}

// Dash Logic
function renderDashboard() {
  UI.containers.subjects.innerHTML = DATA.subjects.map(subject => `
    <div class="subject-card" onclick="openRepo('${subject.id}')">
      <div class="card-header">
        <div class="icon-box"><i data-lucide="${subject.icon || 'book'}"></i></div>
      </div>
      <div class="card-body">
        <h3>${subject.name}</h3>
        <p>Expert study modules</p>
      </div>
    </div>
  `).join('');
  
  if (window.lucide) lucide.createIcons();
}

// Repo Logic
window.openRepo = function(subjectId) {
  const subject = DATA.subjects.find(s => s.id === subjectId);
  STATE.selectedSubject = subject;
  
  document.getElementById('repo-title').textContent = subject.name;
  
  UI.containers.topics.innerHTML = subject.topics.map(topic => `
    <div class="topic-item" onclick="startQuiz('${topic.id}')">
      <div class="topic-content">
        <div class="topic-icon"><i data-lucide="file-text"></i></div>
        <div>
          <h4 font-weight-bold>${topic.name}</h4>
        </div>
      </div>
      <i data-lucide="chevron-right" width="20"></i>
    </div>
  `).join('');
  
  switchView('repo');
  if (window.lucide) lucide.createIcons();
};

window.goBack = function() {
  if (STATE.activeView === 'quiz') {
    switchView('repo');
  } else if (STATE.activeView === 'repo') {
    switchView('dashboard');
  } else if (STATE.activeView === 'history' || STATE.activeView === 'results') {
    switchView('dashboard');
  } else {
    switchView('dashboard');
  }
};

// Quiz Logic
window.startQuiz = function(topicId) {
  const subject = STATE.selectedSubject;
  const topic = subject.topics.find(t => t.id === topicId);
  
  if (!topic) {
    alert('Module not found.');
    return;
  }
  
  STATE.quiz = {
    topic: topic,
    currentIndex: 0,
    score: 0,
    startTime: Date.now(),
    isUnlimited: subject.id === 'math' || subject.id === 'physics'
  };
  
  const titleHeader = document.getElementById('quiz-title-header');
  if (titleHeader) titleHeader.textContent = topic.name;
  
  generateAndSetQuestion();
  switchView('quiz');
};

function generateAndSetQuestion() {
  if (STATE.quiz.isUnlimited) {
    if (STATE.selectedSubject.id === 'math') {
      STATE.quiz.currentQuestion = MathGenerator.generate(STATE.quiz.topic.id);
    } else if (STATE.selectedSubject.id === 'physics') {
      STATE.quiz.currentQuestion = PhysicsGenerator.generate(STATE.quiz.topic.id);
    }
  } else {
    // Fixed questions for other subjects if they exist
    const qs = STATE.quiz.topic.questions;
    if (qs.length === 0) {
      alert('No questions available in this module yet.');
      goBack();
      return;
    }
    STATE.quiz.currentQuestion = qs[STATE.quiz.currentIndex % qs.length];
  }
  renderQuestion();
}

function renderQuestion() {
  const q = STATE.quiz.currentQuestion;
  const progressText = STATE.quiz.isUnlimited ? `PRACTICE SESSION` : `QUESTION ${STATE.quiz.currentIndex + 1} OF ${STATE.quiz.topic.questions.length}`;
  
  UI.containers.question.innerHTML = `
    <div class="quiz-meta">
      <div class="quiz-progress">${progressText}</div>
      <div class="label-tiny"><i data-lucide="clock" width="14"></i> ${STATE.quiz.isUnlimited ? 'UNLIMITED MODE' : 'EXAM MODE'}</div>
    </div>
    
    <div class="question-box">
      <p class="question-text">${q.text}</p>
      <div class="options-list">
        ${q.options.map((opt, i) => `
          <button class="option-btn" id="opt-${i}" onclick="submitAnswer(${i})">
            <span>${opt}</span>
            <div class="indicator"></div>
          </button>
        `).join('')}
      </div>

      <div id="explanation-container" class="explanation-box">
        <p class="explanation-title">Step-by-Step Solution</p>
        <p class="explanation-text">${q.explanation || 'The correct answer is determined by standard board patterns.'}</p>
      </div>
    </div>

    <div class="quiz-footer">
      <button id="btn-next" class="btn-primary" style="display: none" onclick="nextQuestion()">Next Question <i data-lucide="arrow-right" style="display:inline-block; vertical-align:middle; margin-left:8px;" width="16"></i></button>
    </div>
  `;
  
  if (window.lucide) lucide.createIcons();
}

window.submitAnswer = function(selectedIdx) {
  const q = STATE.quiz.currentQuestion;
  const isCorrect = selectedIdx === q.correct;
  
  if (isCorrect) STATE.quiz.score++;
  
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add('correct');
      btn.querySelector('.indicator').innerHTML = '<i data-lucide="check" width="12"></i>';
    } else if (i === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
      btn.querySelector('.indicator').innerHTML = '<i data-lucide="x" width="12"></i>';
    }
  });

  document.getElementById('explanation-container').classList.add('active');
  const nextBtn = document.getElementById('btn-next');
  nextBtn.style.display = 'block';
  
  if (window.lucide) lucide.createIcons();
};

window.nextQuestion = function() {
  STATE.quiz.currentIndex++;
  
  // If finite quiz ends
  if (!STATE.quiz.isUnlimited && STATE.quiz.currentIndex >= STATE.quiz.topic.questions.length) {
    finishQuiz();
    return;
  }
  
  generateAndSetQuestion();
};

function finishQuiz() {
  const time = Math.floor((Date.now() - STATE.quiz.startTime) / 1000);
  
  STATE.activeResult = {
    score: STATE.quiz.score,
    total: STATE.quiz.topic.questions.length,
    time: time,
    accuracy: Math.round((STATE.quiz.score / STATE.quiz.topic.questions.length) * 100)
  };
  
  // Save to history
  DATA.history.unshift({
    date: new Date().toISOString(),
    topic: STATE.quiz.topic.name,
    score: STATE.activeResult.accuracy
  });
  localStorage.setItem('entrytest_history', JSON.stringify(DATA.history.slice(0, 10)));
  
  renderResults();
  switchView('results');
}

function renderResults() {
  const res = STATE.activeResult;
  const container = document.getElementById('results-content');
  if (!container) return;

  container.innerHTML = `
    <div class="result-header">
      <div class="result-badge"><i data-lucide="trophy" width="48" height="48"></i></div>
      <h1 class="welcome-title">Practice Complete!</h1>
      <p class="welcome-subtext">You've successfully completed the module.</p>
    </div>
    
    <div class="result-grid">
      <div class="stat-card">
        <p class="stat-label">Score</p>
        <p class="stat-val">${res.score}/${res.total}</p>
      </div>
      <div class="stat-card">
        <p class="stat-label">Accuracy</p>
        <p class="stat-val">${res.accuracy}%</p>
      </div>
      <div class="stat-card">
        <p class="stat-label">Time</p>
        <p class="stat-val">${res.time}s</p>
      </div>
    </div>
    
    <div style="display: flex; gap: 1rem;">
      <button class="btn-primary" style="flex: 1" onclick="switchView('dashboard')">Back to Dashboard</button>
      <button class="btn-primary" style="flex: 1; background: white; color: black; border: 1px solid var(--natural-border);" onclick="startQuiz('${STATE.quiz.topic.id}')">Try Again</button>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

function startMockTest() {
  const allQs = DATA.subjects.flatMap(s => s.topics.flatMap(t => t.questions));
  if (allQs.length === 0) return;
  
  STATE.selectedSubject = { name: 'Full Mock' };
  startQuiz('mock-full', { 
    id: 'mock-full', 
    name: 'Full Mock Test', 
    questions: allQs.sort(() => Math.random() - 0.5) 
  });
}

// Helper to overwrite startQuiz for special objects
const originalStartQuiz = window.startQuiz;
window.startQuiz = function(topicId, customTopic) {
  if (customTopic) {
    STATE.quiz = {
      topic: customTopic,
      currentIndex: 0,
      score: 0,
      startTime: Date.now()
    };
    renderQuestion();
    switchView('quiz');
    return;
  }
  originalStartQuiz(topicId);
};

// History View
function renderHistory() {
  const container = document.getElementById('history-content');
  if (!container) return;
  
  container.innerHTML = `
    <div style="background: white; border: 1px solid var(--natural-border); border-radius: 24px; padding: 2rem;">
      ${DATA.history.length === 0 ? '<p>No history yet.</p>' : `
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="text-align: left; border-bottom: 1px solid var(--natural-border)">
              <th class="label-tiny" style="padding: 1rem">Date</th>
              <th class="label-tiny" style="padding: 1rem">Module</th>
              <th class="label-tiny" style="padding: 1rem">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            ${DATA.history.map(h => `
              <tr style="border-bottom: 1px solid var(--natural-bg)">
                <td style="padding: 1rem; font-size: 0.875rem">${new Date(h.date).toLocaleDateString()}</td>
                <td style="padding: 1rem; font-weight: 600">${h.topic}</td>
                <td style="padding: 1rem; color: var(--natural-accent); font-weight: 700">${h.score}%</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `}
    </div>
  `;
}

// Override switchView to render specific dynamic pages
const originalSwitchView = switchView;
switchView = function(viewName) {
  if (viewName === 'history') renderHistory();
  if (viewName === 'dashboard') renderDashboard();
  originalSwitchView(viewName);
};

// Boot
window.onload = init;
