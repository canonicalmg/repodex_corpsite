export default function FAQ() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-12">
            <h2 className="h2 mb-4">Frequently Asked Questions</h2>
          </div>

          {/* FAQs */}
          <div className="max-w-sm mx-auto lg:max-w-none">
            
            <div className="mb-4 faq-item">
              <input type="checkbox" id="faq1" className="hidden" defaultChecked />
              <label htmlFor="faq1" className="text-lg font-semibold mb-2 cursor-pointer block">
                • How does Repodex handle and protect my code?
              </label>
              <div className="faq-content">
                At Repodex, we prioritize your data's security and privacy. We do not use your information for anything other than executing the features provided. Your code is not stored unless absolutely necessary. We do not train any models on your code, nor do we sell it. Your code's integrity and confidentiality are paramount to us.
              </div>
            </div>

            <div className="mb-4 faq-item">
              <input type="checkbox" id="faq2" className="hidden" />
              <label htmlFor="faq2" className="text-lg font-semibold mb-2 cursor-pointer block">
                • Will Repodex make changes to my code without my knowledge?
              </label>
              <div className="faq-content">
                No, Repodex will never modify your code without your explicit approval. All code changes are proposed and need to be approved via a pull request in Git.
              </div>
            </div>

            <div className="mb-4 faq-item">
              <input type="checkbox" id="faq3" className="hidden" />
              <label htmlFor="faq3" className="text-lg font-semibold mb-2 cursor-pointer block">
                • How is Repodex different from GitHub Copilot?
              </label>
              <div className="faq-content">
                While GitHub Copilot assists you in writing code in real-time, Repodex focuses on rewriting and optimizing code you've written in the past, especially if it contains errors or requires improvements.
              </div>
            </div>

            <div className="mb-4 faq-item">
              <input type="checkbox" id="faq4" className="hidden" />
              <label htmlFor="faq4" className="text-lg font-semibold mb-2 cursor-pointer block">
                • Which programming languages does Repodex support?
              </label>
              <div className="faq-content">
                Repodex currently supports Python, JavaScript, Java, Bash, HTML, and CSS. We are continuously working to expand our support, and more languages will be available soon.
              </div>
            </div>

            <div className="mb-4 faq-item">
              <input type="checkbox" id="faq5" className="hidden" />
              <label htmlFor="faq5" className="text-lg font-semibold mb-2 cursor-pointer block">
                • What is Repodex's refund policy?
              </label>
              <div className="faq-content">
                We offer a 30-day money-back guarantee. If you're not satisfied within your first 30 days, we'll provide a full refund.
              </div>
            </div>

            <div className="mb-4 faq-item">
  <input type="checkbox" id="faq6" className="hidden" />
  <label htmlFor="faq6" className="text-lg font-semibold mb-2 cursor-pointer block">
    • I'm interested in an enterprise plan. How can I get more information?
  </label>
  <div className="faq-content">
    For enterprise plans and other related inquiries, please email Marcus, our CEO, at <a href="mailto:marcus@repodex.ai" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'underline' }}>marcus@repodex.ai</a>.
  </div>
</div>


            <div className="mb-4 faq-item">
              <input type="checkbox" id="faq7" className="hidden" />
              <label htmlFor="faq7" className="text-lg font-semibold mb-2 cursor-pointer block">
                • How can I start optimizing my code with Repodex?
              </label>
              <div className="faq-content">
                Simply sign up on our platform, link your repositories, and let Repodex analyze and suggest optimizations. Remember, no changes are made without your approval, ensuring you have full control over your code.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
