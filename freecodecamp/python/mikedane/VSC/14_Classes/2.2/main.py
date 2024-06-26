from question import Question

question_prompts = [ 
    "What color are apples?\n(a) Red\Green\n(b) Purple\n(c) Orange\n\n",
    "What color are bananas?\n(a) Teal\n(b) Magenta\n(c) Yellow\n\n",
    "What color are strawberries?\n(a) Yellow\n(b) Red\n(c) Blue\n\n"
]

questions = [ 
    Question(question_prompts[0], "a"),
    Question(question_prompts[1], "c"),
    Question(question_prompts[2], "b")
]

def run(questions):
    score = 0
    for q in questions:
        answer = input(q.prompt)
        if (answer == q.answer):
            score = score + 1
    print("You answered " + str(score) + "/" + str(len(questions)) + " questions correctly!")

run(questions)