from quizzer import LoadQuestionsFirst, NowQuizMe

question_prompts = ["What color are apples?\n(a) Red/Green\n(b) Yellow\n(c) Orange\n\n",
                    "What color are bananas?\n(a) Purple\n(b) Orange\n(c) Yellow\n\n",
                    "What color are strawberries?\n(a) Green\n(b) Red\n(c) Magenta\n\n"]
answers = ["a", "c", "b"]

questions = LoadQuestionsFirst(question_prompts, answers)
NowQuizMe(questions)
