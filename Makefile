IMAGE_NAME := front
CONTAINER_NAME := gal

push:
	setx BUILDKIT 1
	docker build -t $(IMAGE_NAME) ./

run:
	docker run --name $(CONTAINER_NAME) -p 3000:3000 $(IMAGE_NAME)

rm:
	docker stop $(CONTAINER_NAME)
	docker container prune --force
	docker rmi $(IMAGE_NAME)
