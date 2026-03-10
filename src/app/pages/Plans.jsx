import { Link } from "react-router-dom";

export function Plans() {

  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Build first and deploy forever",
      features: [
        "Basic features",
        "Limited Customization",
        "With Ads",
        "No Maintenance",
      ],
      button: "Start for free"
    },
    {
      name: "Basic",
      price: "₹3000",
      description: "Ready to grow big",
      features: [
        "All features of free plan",
        "Moderate Customization",
        "Domain email support",
        "Yearly maintenance included"
      ],
      button: "Get Started"
    },
    {
      name: "Premium",
      price: "₹8000",
      description: "Grow faster as an organization",
      features: [
        "All features of basic plan",
        "Advaced features",
        "High customization",
        "Minimal ads"
      ],
      button: "Go Premium"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Built around you",
      features: [
        "All features of premium plan",
        "Fully customized design",
        "Features based on your request",
        "Full Maintenance"
      ],
      button: "Contact Sales"
    }
  ];

  return (
    <div className="bg-slate-900 text-white">

      {/* Hero Section */}
      <section className="py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Build free. <br />
          You think and we'll achieve it.
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Start small, scale when you need. Flexible plans for businesses at every stage.
        </p>
      </section>


      {/* Plans Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-8 flex flex-col justify-between hover:shadow-xl transition"
            >

              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                  {plan.name}
                </h3>

                <div className="text-3xl font-bold mb-4">
                  {plan.price}
                </div>

                <p className="text-gray-400 mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>


              <Link
                to="/contact"
                className="mt-8 block text-center bg-cyan-500 hover:bg-cyan-400 text-black font-medium py-3 rounded-lg transition"
              >
                {plan.button}
              </Link>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}