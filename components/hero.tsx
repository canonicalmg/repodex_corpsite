import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import './styles.css'

export default function Hero() {
  const conversation = [
    { user: 'User 1', message: 'Hello, how can I help you today?' },
    { user: 'User 2', message: 'I have a question about the product.' },
    { user: 'User 1', message: 'Of course, I\'d be happy to help. What\'s your question?' },
    { user: 'User 2', message: 'this is a test?' },
  ];
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          <svg className="max-w-full" width="564" height="552" viewBox="0 0 564 552" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="illustration-02" x1="-3.766" y1="300.204" x2="284.352" y2="577.921" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5D5DFF" stopOpacity=".01" />
                <stop offset="1" stopColor="#5D5DFF" stopOpacity=".32" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-20 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-4">
            <h1 className="h1 mb-4" data-aos="fade-up">Repodex: Find and Fix Bugs</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">AI-powered code analysis. Detect bugs, assess risks, and optimize your codebase with a single click.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.repodex.ai">Try it Free</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://calendly.com/canonicalmg/product-demo">Get a Demo</a>
              </div>
            </div>
          </div>

          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}

          <div className="max-w-lg mx-auto mt-12 md:mt-16" data-aos="fade-up">
        <div className="bg-black text-white p-6 rounded-lg overflow-y-auto" style={{ height: '40vh', maxHeight: '40vh' }}>
          {conversation.map((entry, index) => (
            <div 
              key={index} 
              style={{ 
                animation: `fadeIn 2s ${index * 1.5}s forwards`, 
                opacity: 0 
              }} 
            >
              <div className="font-bold">{entry.user}:</div>
              <p>{entry.message}</p>
            </div>
          ))}
        </div>
      </div>

        </div>

      </div>
    </section>
  )
}
