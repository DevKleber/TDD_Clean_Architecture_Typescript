class Person {
	speak(name?: string): string {
		return `Olá ${name?.toUpperCase() ?? "Fulano"}!!!`;
	}
}

const p = new Person();

p.speak("kleber");
p.speak();
