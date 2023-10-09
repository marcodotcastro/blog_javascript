// create-post.dto.ts
export class CreatePostDto {
  title: string;
  content: string;
}

// update-post.dto.ts
export class UpdatePostDto {
  title?: string;
  content?: string;
}