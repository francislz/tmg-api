# Notes

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

- [] Create project initial structure
- [] Set up typescript and tsrynge to manage dependency injection
- [] Set up express server
- [] Set up Joi and celebrate to manage routes validations
- [] Stack implementation
  - [] Create stack layer to handle the common operations
  - [] Create controller layer to manage operations
  - [] Create routes:
    - POST (/stack): Add item to stack
    - GET (/stack): Top of the stack
- [] In-memory cache
  - [] Create key-store layer to handle operations
    - Options to handle TTL:
      - Call setTimeout to delete item from cache after TTL (works fine for small caches)
      - Handle TTL as timestamps and check the expiration when retrieving the item (more scalable)
  - [] Create controller to manage operations
  - [] Create routes:
    - POST (/store): Add item to key-store
    - GET (/store/{key}): Retrieve item from key-store
    - DELETE (/store/{key}): Remove item from key-store
