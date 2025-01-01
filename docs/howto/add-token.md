# Adding JWT Tokens to Request Headers

## Using Fetch API
```javascript
fetch('https://api.example.com/data', {
  headers: {
    'Authorization': `Bearer ${jwtToken}`
  }
})
```

## Using Axios
```javascript
axios.get('https://api.example.com/data', {
  headers: {
    'Authorization': `Bearer ${jwtToken}`
  }
})
```

## Using XMLHttpRequest
```javascript
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.example.com/data')
xhr.setRequestHeader('Authorization', `Bearer ${jwtToken}`)
xhr.send()
```

## Using jQuery
```javascript
$.ajax({
  url: 'https://api.example.com/data',
  headers: {
    'Authorization': `Bearer ${jwtToken}`
  }
})
```

## Python Requests
```python
import requests

headers = {'Authorization': f'Bearer {jwt_token}'}
requests.get('https://api.example.com/data', headers=headers)
```

## cURL
```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" https://api.example.com/data
```