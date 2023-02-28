# React Vite CSP

# Usage

- Install

```
yarn install
```

- Run

```
yarn dev
```

- Check Content Security Policy

```
curl -s --head http://localhost:5173/ | \
  grep "content-security-policy"
```