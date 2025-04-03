import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PetAcupuncture() {
  return (
    <div>
      {/* Page Header */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src="https://ext.same-assets.com/965708439/608452770.jpeg"
          alt="Pet Acupuncture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <Image
              src="https://ext.same-assets.com/965708439/3779773145.png"
              alt="Leaves"
              width={50}
              height={50}
              className="mx-auto mb-2"
            />
            <h1 className="text-4xl font-semibold text-white">The Uses & Benefits of<br />Pet Acupuncture</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Pet acupuncture is becoming a more common therapy in veterinary medicine due to its versatility, lack of side effects, and positive outcomes for pets. Beaver Brook Animal Hospital's Dr. Asher is a certified veterinary acupuncturist and performs this therapy for dogs and cats of Wethersfield. While we typically perform acupuncture in our hospital, we are also able to perform it in the comfort of your home. Please call us at (860) 757-3346 to schedule a home visit.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mb-10">
            <h2 className="text-2xl text-center mb-4">Interested in Acupuncture for Your Cat or Dog?</h2>
            <div className="flex justify-center">
              <Link href="/appointment-request" className="btn-primary">
                Request an Appointment
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl mb-6">What is Acupuncture?</h2>
              <p className="text-gray-700 mb-4">
                Acupuncture is an ancient practice stemming from traditional Chinese medicine. It involves the insertion of very fine needles into certain acupressure points in the body. Scientifically, these points correspond with nerve clusters, muscles, and joints. When Dr. Asher inserts needles into these points, they promote physiological changes including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Increasing blood circulation</li>
                <li>Greater production of endorphins, which relieve pain</li>
                <li>Reducing inflammation</li>
                <li>Stimulating the nervous system</li>
              </ul>
              <p className="text-gray-700 mb-4">
                In addition to traditional acupuncture, our veterinarian also performs aqua-puncture as well as electro-puncture for further healing benefits. Aqua-puncture involves the injection of a solution into your pet's acupuncture points that promotes longer-lasting relief. Electro-acupuncture, on the other hand, uses a mild electrical charge to stimulate the acupuncture points at a deeper level than traditional acupuncture.
              </p>
            </div>
            <div className="md:col-span-1">
              <div className="relative h-60 rounded-full overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/965708439/92357849.jpeg"
                  alt="Brown and black dog"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <Image
                src="https://ext.same-assets.com/965708439/2515390639.jpeg"
                alt="Gray cat with yellow eyes"
                width={500}
                height={300}
                className="mb-4 rounded-lg w-full h-auto"
              />
            </div>
            <div>
              <Image
                src="https://ext.same-assets.com/965708439/3505022569.jpeg"
                alt="Dog with tongue sticking out"
                width={500}
                height={300}
                className="mb-4 rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl mb-6">Conditions Helped by Acupuncture</h2>
              <p className="text-gray-700 mb-4">
                Acupuncture can be used as a complementary therapy for many different conditions including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Arthritis</li>
                  <li>Neck and back pain</li>
                  <li>Nausea and gastrointestinal problems</li>
                  <li>Urinary incontinence</li>
                  <li>Wound healing</li>
                  <li>Allergies</li>
                </ul>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Intervertebral disc disease</li>
                  <li>Nerve disorders</li>
                  <li>Hip dysplasia</li>
                  <li>Lick granulomas</li>
                  <li>Relief from cancer treatment side effects</li>
                  <li>And more</li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="relative h-60 w-full">
                <Image
                  src="https://ext.same-assets.com/965708439/3987011211.jpeg"
                  alt="Gray kitty"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <h2 className="text-3xl mb-6">Does Acupuncture Have Any Side Effects?</h2>
          <p className="text-gray-700 mb-8">
            Pet acupuncture is entirely safe with no lasting side effects. The only possible side effects involve some bruising or light bleeding where we place the needles, but this is unlikely with a certified veterinary acupuncturist. Other possible side effects include tiredness and lethargy after a session, but this typically does not last.
          </p>

          <h2 className="text-3xl mb-6">Another Complement with Herbal Therapy</h2>
          <p className="text-gray-700 mb-8">
            In addition to acupuncture therapy, Dr. Asher also offers Chinese herbal medicine as a complementary option to your pet's treatment. Herbal medicine uses plants in concentrated forms for their therapeutic benefits. Herbal treatments can be used in conjunction with acupuncture to treat many of the conditions listed above. Dr. Asher will form a unique treatment plan for your pet involving herbal medication as needed.
          </p>
        </div>
      </div>
    </div>
  );
}
