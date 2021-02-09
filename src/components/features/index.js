/* TSL:   https://5af82me9j94m-zcnmmwrufyo4w.hop.clickbank.net/ */
/* VSL:  https://656afdqdch7jzzcpqnwdpeuk37.hop.clickbank.net/?cbpage=1 */

import React from "react"
import { Link } from "react-scroll"
import FluidImg from "../Image/FluidIMG"

function Features() {
  return (
    <section id="features" className="max-w-4xl mx-auto">
      <div className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center md:text-center">
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
          <div className="text-center">
            <a
              href="https://o06vt.bemobtrcks.com/click/1?ns=c%3D82cac172-dde3-47b1-b318-8d836d59d463..l%3D733a25dc-1df9-4349-8c2e-3da1eefca7e4..a%3D0..b%3D0"
              className="inline-block px-4 py-4 mx-2 my-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700  cursor-pointer"
            >
              Order A Sample
            </a>
          </div>
          <div className="lg:text-center md:text-center">
            <Link to="benefits" smooth className="cursor-pointer">
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
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
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
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    <strong>All Natural </strong>
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    You will love the fact that the supplement is entirely made
                    of natural ingredients sourced from the best farms around
                    the world. It guarantees that it is free of any side
                    effects. Thus, anyone can use this formula without feeling
                    any harmful effects, unlike the many over-the-counter drugs.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900 ">
                    Improve your vision.
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    Over time, as you eyesight degenerates, you stop seeing
                    things clearly. You start facing issues like floaters,
                    distorted images, flashes, etc. ReVision can help you
                    restore your vision, so you can see things like you did
                    before your eyes started to go bad. This supplement has
                    nutrients that aid in bringing your eyesight back to its
                    former healthy level..
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    Considerably reduce the risk of surgery
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    Certain eye ailments like cataract and macular degeneration
                    require surgery to be repaired. Fortunately, if you consume
                    ReVision, you can combat these issues and circumvent the
                    surgery if you don't want to undergo a procedure. This
                    supplement depends on natural ingredients to help you
                    restore your eyesight.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
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
                    <strong>Cash-Back Guarantee</strong>
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    With so many products being promoted as the ultimate
                    solution to brain and vision health, you might wonder what
                    sets this one apart and if it will indeed work. The good
                    thing with the <strong>ReVision™</strong> supplement is that
                    it is backed with an airtight 60-day money-back guarantee.
                    You don’t have to worry about whether it will work or not.
                    If you purchase it and find that it’s a complete bunch of
                    hogwash, just return it and ask for your money.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
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
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    Slightly reduce the UV effects on your eyes.
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    This supplement also acts as a natural sunblock, and filters
                    out UV rays, and keeps your eyes safe. This reduces the need
                    for sunglasses constantly. Usually, with degenerative eye
                    conditions, going out in the sun is quite discomforting.
                    This supplement helps your eyes grow stronger, and thus more
                    resistant to UV rays and excess light. This doesn't mean
                    that you should expose your eyes to unnecessary amounts of
                    light.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    <strong>Revitalizes Vision</strong>
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    The supplement also helps to ramp up your vision by
                    supplying you with important nutrients. You will realize
                    instant changes in your eyesight. If you must wear glasses
                    to see, you will find that it’s not necessary to do so.
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:text-center md:text-center">
            <Link to="benefits" smooth className="cursor-pointer">
              <h1
                id="benefits"
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                ReVision 2.0
              </h1>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
            <div>
              <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl text-center">
                PROs
              </p>
              <ul className="pros">
                <li>
                  There is a tasty<strong> discount for you</strong> if you buy
                  more than one bottle
                </li>
                <li>
                  The only place you can get the capsule is by ordering from the
                  official manufacturer’s website. This guarantees that you
                  cannot get counterfeit.
                </li>
                <li>
                  You will <strong>start seeing changes </strong> shortly after
                  beginning to use the supplement.
                </li>
                <li>
                  The <strong>delivery is quick.</strong> You will usually get
                  your shipment in just 3-5 days.
                </li>
              </ul>
            </div>
            <div>
              <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl text-center">
                CONs
              </p>
              <p>
                You must order your <strong>ReVision™</strong> pills at least
                one week before your current stock gets depleted. Otherwise, you
                will find it challenging to maintain dosage. But this problem
                can be solved by purchasing a complete six-month supply at once.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-xl">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Do Not Miss The Limited Discount
            </h2>
            <a href="https://o06vt.bemobtrcks.com/click/1?ns=c%3D82cac172-dde3-47b1-b318-8d836d59d463..l%3D733a25dc-1df9-4349-8c2e-3da1eefca7e4..a%3D0..b%3D0">
              <FluidImg filename="discount-list.png" />
            </a>

            <div className="text-center">
              <a
                href="https://o06vt.bemobtrcks.com/click/1?ns=c%3D82cac172-dde3-47b1-b318-8d836d59d463..l%3D733a25dc-1df9-4349-8c2e-3da1eefca7e4..a%3D0..b%3D0"
                className="inline-block px-4 py-4 mx-2 my-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700  cursor-pointer"
              >
                Get The Discount Here
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-xl">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions{" "}
            </h2>

            <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              How long does it take to work?
            </p>

            <p className="mt-2 text-base text-gray-700 text-justify max-w-xl">
              This supplement has fast-acting and quick-absorbing ingredients.
              Hence, it should start showing results quickly provided you follow
              dosage instructions and adhere to other conditions. In any case,
              there's a 60-day money-back guarantee, so in case you aren't happy
              after 2 months have passed, you can claim a refund.
            </p>
            <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Where can i buy this supplement?
            </p>

            <p className="mt-2 text-base text-gray-700 text-justify max-w-xl">
              You can buy this supplement from the official website. The
              supplement is available in quantities of 1 bottle of ReVision for
              $69 + $7.95 in shipping and handling, 3 bottles of ReVision for
              $177 with free shipping and handling, and finally, 6 bottles of
              ReVision: $294 with free shipping and handling.
            </p>

            <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              ReVision Supplements Side Effects and Dosage
            </p>

            <p className="mt-2 text-base text-gray-700 text-justify max-w-xl">
              All you need is just 2 small capsules of ReVision every morning
              right after breakfast, with half a glass of water. The ingredients
              are quickly absorbed by the body, and you feel healthy physically
              and mentally. Containing mostly natural ingredients, this
              supplement doesn't have side effects.
            </p>
            <div className="lg:text-center md:text-center">
              <h1
                id="benefits"
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Watch The Official Video For More Details
              </h1>
              <a href="https://656afdqdch7jzzcpqnwdpeuk37.hop.clickbank.net/?cbpage=1">
                <FluidImg filename="video.png" />
              </a>
            </div>
            <div className="lg:text-center md:text-center">
              <h1
                id="benefits"
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Conclusion
              </h1>
              <p className="text-justify">
                <span className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl ">
                  Is it worth it ? Absolutely.
                </span>{" "}
                Backed by a <em>No Question Asked </em> money back guaranteed
                policy. You are either satisfied or refunded. The supplement was
                prepared after exhaustive research and has scientific studies to
                back up its claims. You can always cross-check with your doctor
                before consuming it. Although the results vary from person to
                person, the supplement works out for most. However, if it
                doesn’t work, you can rest assured and rely on the money-back
                guarantee.
              </p>
              <div className="text-center">
                <a
                  href="https://o06vt.bemobtrcks.com/click/1?ns=c%3D82cac172-dde3-47b1-b318-8d836d59d463..l%3D733a25dc-1df9-4349-8c2e-3da1eefca7e4..a%3D0..b%3D0"
                  className="inline-block px-4 py-4 mx-2 my-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700  cursor-pointer"
                >
                  Visit Official WebSite
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer navbar-static-bottom">
        <div className="flex flex-col">
          <span className="self-center cursor-pointer ">
            <Link to="lander" smooth duration={1000}>
              <svg
                className="w-6 h-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
            </Link>
          </span>
          <hr />
          <p className="footer__text">
            © {new Date().getFullYear()} - The statements made within this
            website have not been evaluated by the U.S. Food and Drug
            Administration. These statements and the products of this company
            are not intended to diagnose, treat, cure or prevent any disease.
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Features
