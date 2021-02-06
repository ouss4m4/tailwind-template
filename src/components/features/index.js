import React from "react"
import { Link } from "react-scroll"
import FluidImg from "../Image/FluidIMG"

function Features() {
  return (
    <section id="features" className="max-w-4xl mx-auto">
      <div className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <Link to="ingredients" smooth className="cursor-pointer">
              <h1
                id="ingredients"
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Revision 2.0 Ingredients
              </h1>
            </Link>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Natural way to treat tired eyes
            </p>
            {/* <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto text-justify">
              ReVision 2.0 brings together a powerful mix of herbs and
              ingredients that have been carefully studied and work in synergy
              to bring powerful health benefits to your brain and vision.
            </p> */}
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*   <!-- Heroicon name: outline/globe-alt --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900 ">
                    Huperzine-A
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    Huperzine- A is one of the most important ReVision 20
                    ingredients that come from a plant named Huperzia Serrata.
                    It has been extensively used in Chinese Medicine due to its
                    properties to breakdown acetylcholine which, in turn, helps
                    boost learning and memory..
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*   <!-- Heroicon name: outline/globe-alt --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    Alpha GPC
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    Alpha GPC comes from the crushing of different plants such
                    as soy. Inside the brain, it focuses on producing more
                    acetylcholine which can provide users of the ReVision
                    supplement to enjoy an improved memory and thinking
                    capacity.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*  <!-- Heroicon name: outline/scale --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    Phosphatidylserine
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    Among the most complex yet useful ReVision ingredients,
                    phosphatidylserine supports the health of the brain and
                    boosts many of its functions, including focus, memory,
                    concentration, and cognition. It has been particularly used
                    for patients with Alzheimer’s disease and ADHD.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*   <!-- Heroicon name: outline/lightning-bolt --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    L-Theanine
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    L-theanine is an amino acid that tends to improve alertness
                    while maintaining a state of calmness in the body. According
                    to the current evidence, this ingredient can help relieve
                    anxiety because of its structural similarity to glutamate, a
                    type of neurotransmitter in the brain that’s often behind
                    the generation of anxious thoughts. So it competes with
                    glutamate for its receptors on the brain cells, and in doing
                    so, blocks out its effects, which improves the mood and
                    memory.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*   <!-- Heroicon name: outline/annotation --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    L-Tyrosine
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    L-tyrosine is a precursor substance used for the production
                    of several hormones like adrenaline, norepinephrine, and
                    dopamine, all of which can boost brain health in one way or
                    another. Lastly, this amino acid also helps regulate the
                    natural pigments in the eyes.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*   <!-- Heroicon name: outline/annotation --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    B Complex Vitamins
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    Vitamin B complex has been proven to provide a number of
                    benefits that collectively improve your body functions
                    greatly. With these vitamins in your ReVision pills, you can
                    help your body improve its red blood cell production and
                    provide other benefits in terms of brain health and the
                    health of your eyes.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="lg:text-center">
            <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto text-justify">
              Now the goal of this formula is to rectify the root cause of poor
              eye sight, which supposedly has nothing to do with age. but, a
              “deeply peculiar and dangerous enzyme” is deemed the culprit. this
              enzyme triggers inflammation, which in turn deteriorates some of
              the organs that are critical for eyesight.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <FluidImg filename="Optic-ner" />
            <p className="text-center text-gray-400 text-italic">
              Optical Nerve{" "}
            </p>
          </div>

          <div className="lg:text-center">
            <Link to="benefits" smooth>
              <h1
                id="benefits"
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Revision 2.0 Benefits
              </h1>
            </Link>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What are the benefits that you could expect, by using ReVision?{" "}
            </p>
            {/* <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto text-justify">
              ReVision 2.0 brings together a powerful mix of herbs and
              ingredients that have been carefully studied and work in synergy
              to bring powerful health benefits to your brain and vision.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
