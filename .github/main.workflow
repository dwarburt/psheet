workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install -g @angular/cli && cd psheet-app && mkdir -p /tmp/site && ng build --prod --output-path /tmp/site --base-href /psheet/ && cd .. && git checkout gh-pages && rm -rf * && cp -r /tmp/site/* . && git add . && git commit -m \"deploy site\" && git push"
  secrets = ["GITHUB_TOKEN"]
}
