class Question:
    def __init__(self, prompt, answer):
        self.prompt = prompt
        self.answer = answer

    def isCorrectAnswer(self, answer):
        if self.answer == answer:
            return True
        return False


def LoadQuestionsFirst(prompts, answers):
    questions = []
    for index in range(len(answers)):
        question = Question(prompts[index], answers[index])
        questions.append(question)
    return questions


def NowQuizMe(questions):
    numberCorrect = 0
    for question in questions:
        print(question.prompt)
        yourAnswer = input("Enter Letter: ")
        if question.isCorrectAnswer(yourAnswer):
            numberCorrect += 1
    print("You have " + str(numberCorrect) + "/" +
          str(len(questions)) + " correct!")

# def QuizMe():
#     numberCorrect = 0
#     for index in range(len(answer_keys)):
#         theAsk = Question(question_prompts[index], answer_keys[index])
#         print(theAsk.prompt)
#         yourAnswer = input("Enter Letter: ")
#         if theAsk.isCorrectAnswer(yourAnswer):
#             numberCorrect += 1
#     print("You have " + str(numberCorrect) + "/" +
#           str(len(answer_keys)) + " correct!")

# def QuizMe():
#     numberCorrect = 0
#     for index in range(len(answer_keys)):
#         theAsk = Question(question_prompts[index], answer_keys[index])
#         print(theAsk.prompt)
#         yourAnswer = input("Enter Letter: ")
#         if yourAnswer == theAsk.answer:
#             numberCorrect += 1
#     print("You have " + str(numberCorrect) + "/" +
#           str(len(answer_keys)) + " correct!")
