import Image from "next/image";

export function Values() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Excellence, Innovation, and Character
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Sunflower School, we believe in nurturing not just academic excellence, 
            but also character, creativity, and confidence.
          </p>
        </div>

        <div className="relative aspect-[16/9] max-w-5xl mx-auto rounded-lg overflow-hidden">
          <div className="imgContainer">
            <Image
              src="/images/valuesHero.jpg"
              alt="School campus"
              fill
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            Our dedicated teachers and supportive environment help each child thrive intellectually, socially, and emotionally.
            With a strong blend of national and international curricula, we empower our learners to shine 
            brightly and make a positive impact in their communities and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
