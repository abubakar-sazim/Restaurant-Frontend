import { faker } from "@faker-js/faker";

export const generateFakename = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return `${firstName} ${lastName}`;
};

export const splitTextToSentences = (text: string) => {
  const sentences = text.split(/\. |\.\n|\.$/);
  const firstThreeSentences = sentences.slice(0, 3);
  return firstThreeSentences.join(". ");
};
