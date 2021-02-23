from sqlalchemy import create_engine

db_string = "postgres://ezolcxxoztzkwe:700b5cc4219e52a1476fb954dc9b78f553bfbc7ba438b6ead4bfc00d26404763@ec2-3-222-127-167.compute-1.amazonaws.com:5432/d42frj072ftbkq"

db = create_engine(db_string)

result_set = db.execute("SELECT * FROM students")  
for r in result_set:  
    print(r)
