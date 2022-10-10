what the user should be able to do:
1. worker
	- view posted jobs 
	- bid on a posted job
	- if the bid is won then they can do the task
	- after the task has been done payment is deposited in their account
 	- send and recieve messages 
	- view work history i.e jobs bidded on, jobs completed, incomplete jobs
2. client
	- post jobs
	- delete jobs
	- update jobs
	- view bids 
	- award bid to worker
	- send and recieve messages
	- after the worker has finished then the client can approve if it was done correctly only after which is the money sent to the worker
	- view work history i.e total jobs posted so far, bids on each of the jobs
3. admin
	- approve pending accounts
	- delete accounts
	- delete jobs
	- view all the total statistics of the system in a dashboard



some notes:
	- some of the state i will be maintaining is: 
		1. is_authenticated
		2. user {object containing the user information}
		3. session_token

