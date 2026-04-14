# Pagination Project (REST API Design)

## Overview
This project covers:
- Basic pagination (page, page_size)
- Hypermedia pagination (HATEOAS)
- Deletion-resilient pagination

## Learning Objectives
- Implement pagination using slicing
- Provide API navigation metadata
- Handle data mutations safely

## Concepts

### Basic Pagination
Formula:
    start = (page - 1) * page_size
    end = page * page_size

### Hypermedia (HATEOAS)
Return metadata:
- page
- page_size
- next_page
- prev_page
- total_pages

### Deletion-Resilient Pagination
Use indexed dataset instead of list slicing to avoid skipping items after deletion.

## File Structure
- 0-simple_helper_function.py
- 1-simple_pagination.py
- 2-hypermedia_pagination.py
- 3-hypermedia_del_pagination.py
- server.py

## Data Source
Popular_Baby_Names.csv

## Requirements
- Python 3.9
- pycodestyle (2.5)
- All functions type-annotated
- Proper documentation for modules and functions

## Notes
- Validate inputs
- Avoid off-by-one errors
- Cache dataset for performance
