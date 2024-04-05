name: End-to-end tests - kitchensink
on: push
jobs:
    cypress-run:
    runs-on: ubuntu-22.04
    steps:
        - name: Checkout
            uses: actions/checkout@v4
        - name: Install dependencies
            run: npm ci
        - name: Start server
            run: npm start &
            env:
                CI: true
        - name: Cypress run
            uses: cypress-io/github-action@v6
            with:
                wait-on: 'http://localhost:8080’
        - uses: actions/upload-artifact@v4
            if: failure()
            with:
                name: cypress-screenshots
                path: cypress/screenshots
                if-no-files-found: ignore
        - uses: actions/upload-artifact@v4
            if: failure()
            with:
                name: cypress-videos
                path: cypress/videos
                if-no-files-found: ignore