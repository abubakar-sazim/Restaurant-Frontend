import { faker } from "@faker-js/faker";

export const generateFakename = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return `${firstName} ${lastName}`;
};

export const splitTextToSentences = (text: string) => {
  const sentences = text.split(/\. |\.\n|\.$/);
  if (sentences.length > 5) {
    const firstFiveSentences = sentences.slice(0, 5);
    return `${firstFiveSentences.join(". ")}.`;
  } else {
    return `${text}`;
  }
};
