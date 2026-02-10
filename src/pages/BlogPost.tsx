import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  const posts: Record<string, any> = {
    '1': {
      title: 'Getting Started with React and TypeScript',
      date: 'Dec 15, 2024',
      category: 'Development',
      content: `
        <h2>Introduction</h2>
        <p>React and TypeScript have become the go-to combination for building modern, scalable web applications. TypeScript adds static typing to JavaScript, catching errors early and improving code quality.</p>
        
        <h2>Why TypeScript with React?</h2>
        <p>TypeScript provides several benefits when working with React:</p>
        <ul>
          <li><strong>Type Safety:</strong> Catch errors during development rather than runtime</li>
          <li><strong>Better IDE Support:</strong> Enhanced autocomplete and IntelliSense</li>
          <li><strong>Improved Refactoring:</strong> Safely rename and restructure code</li>
          <li><strong>Self-Documenting Code:</strong> Types serve as inline documentation</li>
        </ul>

        <h2>Setting Up Your Project</h2>
        <p>The easiest way to start a React + TypeScript project is using Vite:</p>
        <pre><code>npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev</code></pre>

        <h2>Basic Component Example</h2>
        <p>Here's a simple TypeScript React component:</p>
        <pre><code>interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ label, onClick, disabled = false }: ButtonProps) => {
  return (
    &lt;button onClick={onClick} disabled={disabled}&gt;
      {label}
    &lt;/button&gt;
  );
};</code></pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Always define prop types using interfaces or types</li>
          <li>Use strict mode in tsconfig.json</li>
          <li>Avoid using 'any' type whenever possible</li>
          <li>Leverage TypeScript utility types like Partial, Pick, and Omit</li>
        </ul>

        <h2>Conclusion</h2>
        <p>React and TypeScript together provide a powerful foundation for building robust applications. The initial learning curve is worth the long-term benefits of type safety and better developer experience.</p>
      `,
    },
    '2': {
      title: 'Building Responsive Layouts with TailwindCSS',
      date: 'Dec 10, 2024',
      category: 'Design',
      content: `
        <h2>What is TailwindCSS?</h2>
        <p>TailwindCSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. Unlike traditional CSS frameworks, Tailwind provides low-level utility classes that let you build completely custom designs.</p>

        <h2>Why Choose Tailwind?</h2>
        <ul>
          <li><strong>Rapid Development:</strong> Build interfaces faster with pre-built utilities</li>
          <li><strong>Consistency:</strong> Design system built into the framework</li>
          <li><strong>Responsive Design:</strong> Mobile-first responsive modifiers</li>
          <li><strong>Small Bundle Size:</strong> Only includes CSS you actually use</li>
        </ul>

        <h2>Responsive Design Made Easy</h2>
        <p>Tailwind uses intuitive breakpoint prefixes:</p>
        <pre><code>&lt;div className="w-full md:w-1/2 lg:w-1/3"&gt;
  Responsive width
&lt;/div&gt;</code></pre>

        <h2>Common Patterns</h2>
        <p><strong>Flexbox Layout:</strong></p>
        <pre><code>&lt;div className="flex items-center justify-between"&gt;
  &lt;div&gt;Left&lt;/div&gt;
  &lt;div&gt;Right&lt;/div&gt;
&lt;/div&gt;</code></pre>

        <p><strong>Grid Layout:</strong></p>
        <pre><code>&lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  &lt;div&gt;Item 1&lt;/div&gt;
  &lt;div&gt;Item 2&lt;/div&gt;
  &lt;div&gt;Item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>

        <h2>Customization</h2>
        <p>Extend Tailwind's default theme in tailwind.config.js:</p>
        <pre><code>module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#d88b8b',
      },
    },
  },
}</code></pre>

        <h2>Conclusion</h2>
        <p>TailwindCSS revolutionizes how we write CSS by providing a utility-first approach that's both powerful and maintainable. Once you get used to the workflow, you'll never want to go back to traditional CSS.</p>
      `,
    },
    '3': {
      title: 'AI Integration in Modern Web Apps',
      date: 'Dec 5, 2024',
      category: 'AI',
      content: `
        <h2>The AI Revolution in Web Development</h2>
        <p>Artificial Intelligence is transforming how we build and interact with web applications. From chatbots to personalized recommendations, AI is becoming an essential part of modern web development.</p>

        <h2>Common AI Use Cases</h2>
        <ul>
          <li><strong>Chatbots & Virtual Assistants:</strong> Provide 24/7 customer support</li>
          <li><strong>Personalization:</strong> Tailor content to individual users</li>
          <li><strong>Image Recognition:</strong> Analyze and categorize visual content</li>
          <li><strong>Natural Language Processing:</strong> Understand and process text</li>
          <li><strong>Predictive Analytics:</strong> Forecast user behavior and trends</li>
        </ul>

        <h2>Popular AI APIs and Services</h2>
        <p><strong>OpenAI API:</strong> Access GPT models for text generation and analysis</p>
        <p><strong>Google Cloud AI:</strong> Vision, Speech, and Natural Language APIs</p>
        <p><strong>AWS AI Services:</strong> Rekognition, Comprehend, and more</p>
        <p><strong>Hugging Face:</strong> Open-source models and transformers</p>

        <h2>Implementing AI in React</h2>
        <p>Example of integrating an AI chatbot:</p>
        <pre><code>const [messages, setMessages] = useState([]);

const sendMessage = async (text) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: text }]
    })
  });
  
  const data = await response.json();
  setMessages([...messages, data.choices[0].message]);
};</code></pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Always handle API errors gracefully</li>
          <li>Implement rate limiting to control costs</li>
          <li>Cache responses when appropriate</li>
          <li>Protect API keys using environment variables</li>
          <li>Consider user privacy and data security</li>
        </ul>

        <h2>The Future</h2>
        <p>AI integration in web apps will only grow more sophisticated. As developers, staying updated with AI technologies and understanding how to implement them effectively will be crucial for building next-generation applications.</p>
      `,
    },
    '4': {
      title: 'Best Practices for Frontend Development',
      date: 'Nov 28, 2024',
      category: 'Development',
      content: `
        <h2>Writing Clean, Maintainable Code</h2>
        <p>Frontend development has evolved significantly. Following best practices ensures your code is maintainable, scalable, and performant.</p>

        <h2>Component Architecture</h2>
        <p><strong>Keep Components Small:</strong> Each component should have a single responsibility</p>
        <p><strong>Reusability:</strong> Design components to be reused across your application</p>
        <p><strong>Composition Over Inheritance:</strong> Build complex UIs by composing simple components</p>

        <h2>State Management</h2>
        <ul>
          <li>Use local state for component-specific data</li>
          <li>Lift state up when multiple components need access</li>
          <li>Consider Context API for app-wide state</li>
          <li>Use state management libraries (Redux, Zustand) for complex apps</li>
        </ul>

        <h2>Performance Optimization</h2>
        <pre><code>// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return &lt;div&gt;{/* render data */}&lt;/div&gt;;
});

// Use useMemo for expensive calculations
const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);

// Use useCallback for function references
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);</code></pre>

        <h2>Code Organization</h2>
        <p>Structure your project logically:</p>
        <pre><code>src/
  components/     # Reusable components
  pages/          # Page components
  hooks/          # Custom hooks
  utils/          # Helper functions
  types/          # TypeScript types
  styles/         # Global styles</code></pre>

        <h2>Testing</h2>
        <ul>
          <li>Write unit tests for utility functions</li>
          <li>Test component behavior, not implementation</li>
          <li>Use integration tests for critical user flows</li>
          <li>Implement E2E tests for key features</li>
        </ul>

        <h2>Accessibility</h2>
        <ul>
          <li>Use semantic HTML elements</li>
          <li>Add ARIA labels where needed</li>
          <li>Ensure keyboard navigation works</li>
          <li>Test with screen readers</li>
          <li>Maintain proper color contrast</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Following these best practices will help you build better frontend applications. Remember, good code is not just about making things work—it's about making them work well, efficiently, and maintainably.</p>
      `,
    },
  };

  const post = posts[id || '1'];

  if (!post) {
    return <div className="text-2xl">Post not found</div>;
  }

  return (
    <>
      <Link to="/blog" className="flex items-center gap-2 text-primary hover:underline mb-8">
        <ArrowLeft size={20} /> Back to Blog
      </Link>

      <article className="max-w-3xl">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Calendar size={16} />
          <span>{post.date}</span>
          <span className="ml-2 bg-tag px-3 py-1 rounded-full text-xs">{post.category}</span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold mb-8">{post.title}</h1>

        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-primary prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
            prose-ul:text-gray-300 prose-ul:mb-4 prose-li:mb-2
            prose-strong:text-white prose-strong:font-semibold
            prose-pre:bg-card prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-code:text-primary prose-code:bg-card prose-code:px-2 prose-code:py-1 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
};

export default BlogPost;
