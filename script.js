




import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  // Interior Design Projects with original image paths
  const interiorProjects = [
    {
      image: "project1images/Living Room.jpg",
      description: "Modern living room design with elegant ceiling and wooden textures."
    },
    {
      image: "project1images/Bed room 1.png",
      description: "Cozy bedroom with a large wall clock and warm ambient lighting."
    },
    {
      image: "project1images/bedroom 2,1.jpg",
      description: "Stylish bedroom with accent lighting and contemporary wooden finishes."
    },
    {
      image: "project1images/kitchen 2.jpg",
      description: "Bright L-shaped kitchen design with modern storage and lighting."
    },
    {
      image: "project1images/bedroom 1,1.png",
      description: "Elegant bedroom design showcasing modern furniture and lighting solutions."
    }
  ];

  // Elevation Projects with original image paths
  const elevationProjects = [
    {
      image: "project1images/project2images/1.png",
      description: "Initial Concept – Visualizing the Structure"
    },
    {
      image: "project1images/project2images/2.jpeg",
      description: "Refining the Design – Material and Environment"
    },
    {
      image: "project1images/project2images/3.jpeg",
      description: "Integrating Real-World Context and Liveliness"
    },
    {
      image: "project1images/project2images/Elevation 2.png",
      description: "Final Model – Modern Urban Aesthetics"
    },
    {
      image: "project1images/project2images/Elevation 3.png",
      description: "Final Visualization – Elegant Night Ambiance"
    }
  ];

  const nextSlide1 = () => {
    setCurrentSlide1((prev) => (prev + 1) % interiorProjects.length);
  };

  const prevSlide1 = () => {
    setCurrentSlide1((prev) => (prev - 1 + interiorProjects.length) % interiorProjects.length);
  };

  const nextSlide2 = () => {
    setCurrentSlide2((prev) => (prev + 1) % elevationProjects.length);
  };

  const prevSlide2 = () => {
    setCurrentSlide2((prev) => (prev - 1 + elevationProjects.length) % elevationProjects.length);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold gradient-text">SHAIK MURASHA VALLI</h2>
          <div className="flex items-center gap-6">
            <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#interior" className="text-muted-foreground hover:text-primary transition-colors">Interior Design</a>
            <a href="#elevation" className="text-muted-foreground hover:text-primary transition-colors">Elevation Design</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <Button variant="outline" className="hover-lift">Download CV</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Interior Designer & Visualizer
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-4 animate-fade-in">
            SHAIK MURASHA VALLI
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Specializing in AutoCAD, Revit, SketchUp, and 3D visualization with expertise in Enscape and V-Ray
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
            <Button size="lg" className="hover-lift" onClick={() => document.getElementById('interior')?.scrollIntoView({ behavior: 'smooth' })}>
              Home Interior Design
            </Button>
            <Button size="lg" variant="outline" className="hover-lift" onClick={() => document.getElementById('elevation')?.scrollIntoView({ behavior: 'smooth' })}>
              Elevation Design
            </Button>
          </div>
        </div>
      </section>

      {/* Interior Design Projects Section */}
      <section id="interior" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Home Interior Design Projects</h2>
            <p className="text-muted-foreground">Explore our latest interior design visualizations</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Card className="overflow-hidden card-interactive shadow-2xl">
              <CardContent className="p-0">
                <div className="relative h-[70vh]">
                  <img 
                    src={interiorProjects[currentSlide1].image} 
                    alt={interiorProjects[currentSlide1].description}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/1400x800/e5e7eb/64748b?text=Interior+Design+Project';
                    }}
                  />
                  <div className="absolute bottom-10 left-10 bg-card/90 backdrop-blur-md rounded-xl p-6 max-w-2xl shadow-xl">
                    <p className="text-lg font-medium text-foreground">
                      {interiorProjects[currentSlide1].description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 hover-lift bg-card/90 backdrop-blur-sm"
              onClick={prevSlide1}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 hover-lift bg-card/90 backdrop-blur-sm"
              onClick={nextSlide1}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center gap-2 mt-6">
              {interiorProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide1(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide1 ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Elevation Design Projects Section */}
      <section id="elevation" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Modern Elevation Design Project</h2>
            <p className="text-muted-foreground">Progressive development from concept to final visualization</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Card className="overflow-hidden card-interactive shadow-2xl">
              <CardContent className="p-0">
                <div className="relative h-[70vh]">
                  <img 
                    src={elevationProjects[currentSlide2].image} 
                    alt={elevationProjects[currentSlide2].description}
                    className="w-full h-full object-contain bg-card"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/1400x800/e5e7eb/64748b?text=Elevation+Design+Project';
                    }}
                  />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-xl px-8 py-4 shadow-xl">
                    <p className="text-lg font-medium text-white text-center">
                      {elevationProjects[currentSlide2].description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 hover-lift bg-card/90 backdrop-blur-sm"
              onClick={prevSlide2}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 hover-lift bg-card/90 backdrop-blur-sm"
              onClick={nextSlide2}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center gap-2 mt-6">
              {elevationProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide2(idx)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    idx === currentSlide2 ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">Let's discuss your next project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">contact@example.com</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">+1 234 567 890</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Your City, Country</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 SHAIK MURASHA VALLI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};